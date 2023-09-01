<template>
    <div
      class="virtual-list"
      :style="{ width: styleWidth, height: styleHeight}"
      ref="box"
    >
      <div class="list-search" :class="[{'icon-clear-wrap':showClear}]" v-if="withSearch && !isCustom">
        <Input
          v-model="inputKeyWord"
          :style="{ width: '100%' }"
          :placeholder="placeholder"
          search
          style="width: auto"
          @on-search="(v) => search('search', v)"
          @on-change="(v) => search('change', v.target.value)"
        ></Input>
        <Icon
          type="ios-close-circle"
          :class="['icon-clear']"
          v-if="showClear"
          @click.native.stop="clearValue"
        />
      </div>
      <div
        class="select-list"
        v-show="listSeach.length"
        ref="selectlist"
        :style="{ width: width + 'px', height: listHeight + 'px' }"
      >
        <div
          class="select-list-blank"
          :style="{ height: listSeach.length * _itemHeight + 'px' }"
          :lenght="listSeach.length"
        >
          <div
            class="select-list-wrap"
            :style="{
              transform: `translateY(${scrollTop - (scrollTop % _itemHeight)}px)`,
            }"
            ref="listwrap"
          >
          
            <template v-if="$scopedSlots.custom && isCustom">
               <div
              :class="[
                'li-custom',
              ]"
              v-for="(li,inx) in listShow"
              :key="`${li['key'] || inx}`"
              :style="{
                height: `${_itemHeight}px`,
              }"
              @click.prevent="(e) => handleClick(li, e)"
              @mouseenter.prevent="(e) => handleHover(li, e)"
            >
              <VirtualListSlot  :params="li" />
              </div>
            </template>
            <template v-else>
               <div
              :class="[
                'select-li',
                'ivu-select-item',
                li.isSelected && 'ivu-select-item-selected',
                { 'ivu-select-item-disabled': li[disabledName] && useDisabled },
              ]"
              v-for="li in listShow"
              :key="`${li[valueName]}`"
              :title="li[labelName]"
              :style="{
                height: `${_itemHeight}px`,
                lineHeight: `${_itemHeight}px`,
              }"
              @click.prevent="(e) => handleClick(li, e)"
              @mouseenter.prevent="(e) => handleHover(li, e)"
            >
              <span v-if="isCheckBox">
                <Checkbox
                  :indeterminate="li[indeterminateName]"
                  v-model="li[isCheckedName]"
                  @click.prevent.stop.native="handleCheck(li)"
                  :disabled="li[disabledName] && useDisabled"
                ></Checkbox>
                {{ li[labelName] }}
              </span>
              <span v-else>{{ li[labelName] }}</span>
              <Icon
                class="item-icon"
                v-show="
                  (li[childrenName] &&
                    li[childrenName].length &&
                    showRightIcon) ||
                  (typeof li.loading !== 'undefined' && !li.loading)
                "
                type="ios-arrow-forward"
              />
              <Icon
                class="item-icon loading"
                v-show="
                  li.loading && (!li[childrenName] || !li[childrenName].length)
                "
                type="ios-loading"
              />
              </div>
            </template>
            
          </div>
        </div>
      </div>
      <div
        class="no-data"
        :style="{ width: width + 'px', height: listHeight + 'px' }"
        v-show="!listSeach.length"
      >
        <slot name="no-data"></slot>
      </div>
      <div class="select-all" v-if="withSelectAll && isCheckBox">
        <span class="all" @click="all">全选</span>
        <span class="clear" @click="clear">清空</span>
      </div>
    </div>
  </template>
  <script>
import Checkbox from "@psi/design/lib/checkbox";
import Input from "@psi/design/lib/input";
import Icon from "@psi/design/lib/icon";
import VirtualListSlot from './slot'
export default {
  name: "BVirtualList",
  components: {
    Checkbox,
    Input,
    Icon,
    VirtualListSlot,
  },
  provide(){
    return {
      VirtualListRoot : this
    }
  },
  props: {
    // 列表类型checkbox和list
    type: {
      type: String,
      default: "checkbox", // simple checkbox  custom
    },
    // 是否需要搜索框
    withSearch: {
      type: Boolean,
      default: true, // none checkbox
    },
    // list所有子项
    list: {
      type: Array,
      default: () => [],
    },
    // 父级盒子的宽度
    width: {
      type: Number | String,
      default: "100%",
    },
    // 父级盒子的高度
    height: {
      type: Number | String,
      default: "100%",
    },
    // list里面的显示名称的字段名
    labelName: {
      type: String,
      default: "label",
    },
    // list里面的表示值的字段名
    valueName: {
      type: String,
      default: "value",
    },
    // 是否选中的字段名
    isCheckedName: {
      type: String,
      default: "isChecked",
    },
    // 禁选字段名
    disabledName: {
      type: String,
      default: "disable",
    },
    // 半选状态名称
    indeterminateName: {
      type: String,
      default: "indeterminate",
    },
    // 子项字段名
    childrenName: {
      type: String,
      default: "children",
    },
    // select 子项的高度
    itemHeight: {
      type: Number,
      default: 36,
    },
    // 是否展示右侧的图标
    showRightIcon: {
      type: Boolean,
      default: true,
    },
    // placeholder
    placeholder: {
      type: String,
      default: "请输入关键字搜索",
    },
    // 是否使用disabled功能
    useDisabled: {
      type: Boolean,
      default: true,
    },
    // 关键字过滤的触发方式
    triggerType: {
      type: String,
      default: "change", // search   change  当数据量过大（万级以上）  请手动换成search触发
    },
    // 是否需要全选按钮
    withSelectAll: {
      type: Boolean,
      default: true,
    },
    // 反选的ID
    selectedIds: {
      type: Array,
      default: () => [],
    },

  },
  data() {
    return {
      // 列表父级框的滚动高度
      scrollTop: 0,
      // 过滤关键词
      keywordFilter: "",
      inputKeyWord: "",
      realWidth: 0,
      realHeight: 0,
      searchTimer: null,
      resizeTimer: null,
      _itemHeight:0,
    };
  },
  watch: {
    selectedIds: {
      handler() {
        if(this.selectedIds.length)this.setSelectedIds(this.selectedIds);
      },
      immediate: true,
    },
    itemHeight:{
       handler() {
         this._itemHeight = this.itemHeight
      },
      immediate: true,
      //
    },
  },
  computed: {
    // 盒子的实际高宽度
    styleWidth() {
      if (typeof this.width === "string") {
        if(!isNaN(this.width)) return this.width+'px'
        return this.width;
      } else {
        return this.width + "px";
      }
    },
    // 盒子的实际高度
    styleHeight() {
      if (typeof this.height === "string") {
        if(!isNaN(this.height)) return this.height+'px'
        return this.height;
      } else {
        return this.height + "px";
      }
    },
    // 是否simple模式
    isSimple(){
      return this.type ==='simple'
    },
    // 是否checkBox模式
    isCheckBox(){
      return this.type ==='checkbox'
    },
    // 是否custom模式
    isCustom(){
      return this.type ==='custom'
    },
    // 是否显示clearble按钮
    showClear(){
      return this.inputKeyWord !== '' &&  this.inputKeyWord !== null && this.inputKeyWord!=='undefined'
    },

    // 列表高度
    listHeight() {
      const height =
        this.realHeight -
        (this.withSearch && !this.isCustom? 32 : 0) -
        (this.withSelectAll && this.isCheckBox? 36 : 0);
      return height < 0 ? 0 : height;
    },
    // listSeach基于list进行搜索过滤的结果
    listSeach() {
      //
      const list = [];
      if(this.isCustom) return this.list
      this.list.forEach((v) => {
        if (
          v[this.labelName]
            .toUpperCase()
            .indexOf(this.keywordFilter.toUpperCase()) !== -1 ||
          !this.keywordFilter
        ) {
          list.push(v);
        }
      });
      this.$emit('on-search',this.keywordFilter,list)
      return list;
    },
    // listShow是需要渲染的子项，基于listSeach和滚动条高度计算
    listShow() {
      const n = this.showNumber < 0 ? 0 : this.showNumber;
      const startI = Math.floor(this.scrollTop / this._itemHeight);
      return this.listSeach.slice(startI, startI + n);
    },
    showNumber() {
      return Math.ceil(this.listHeight / this._itemHeight) + 1;
    },
  },
  mounted() {
    this.$refs.selectlist.addEventListener("scroll", this.scroll);
    this.resize();
    // 监听
    this.resizeObserver = new ResizeObserver(() => {
      this.resize();
    });
    this.resizeObserver.observe(this.$refs.box);
    if( this.$refs.listwrap.firstElementChild && this.$refs.listwrap.firstElementChild.firstElementChild){
          this.resizeObserverFirstElementChild = new ResizeObserver(() => {
            this.resize();
          });
          this.resizeObserverFirstElementChild.observe(this.$refs.listwrap.firstElementChild.firstElementChild);
    }
  },
  beforeDestroy() {
    this.$refs.selectlist.removeEventListener("scroll", this.scroll);
    this.resizeObserver.unobserve(this.$refs.box);
    this.resizeObserverFirstElementChild && this.resizeObserverFirstElementChild.unobserve(this.$refs.box);
  },
  methods: {
    /**
     * @method resize
     * @description 监听盒子尺寸变化
     */
    resize() {
      if(this.resizeTimer) clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(()=>{
        this.realWidth =
        typeof this.width === "number"
          ? this.width
          : this.$refs.box
          ? this.$refs.box.clientWidth
          : 0;
      this.realHeight =
        typeof this.height === "number"
          ? this.height
          : this.$refs.box
          ? this.$refs.box.clientHeight
          : 0;

      if(this.isCustom && this.$scopedSlots.custom){
        if(this.$refs.listwrap && this.$refs.listwrap.firstElementChild && this.$refs.listwrap.firstElementChild.firstElementChild)
          this._itemHeight = this.$refs.listwrap.firstElementChild.firstElementChild.clientHeight
        }
        this.$forceUpdate()
      },30)
      
    },
    scroll() {
      this.scrollTop = this.$refs.selectlist.scrollTop;
    },
    /**
     * @method handleCheck
     * @description 子项选中事件
     * @param {Object} item 子项数据
    */
    handleCheck(item) {
      if (item[this.indeterminateName]) {
        item[this.indeterminateName] = false;
        item[this.isCheckedName] = false;
      } else {
        item[this.isCheckedName] = !item[this.isCheckedName];
      }
      this.$emit("on-check", item);
    },
    /**
     * @method handleHover
     * @description 子项鼠标hover
     * @param {Object} item 子项数据
     * @param {Object} e 鼠标事件
     */
    handleHover(item, e) {
      this.$emit("on-hover", item, e);
    },
    /**
     * @method handleClick
     * @description 子项点击事件
     * @param {Object} item 子项数据
     * @param {Object} e 鼠标事件
     */
    handleClick(item, e) {
      this.$emit("on-click", item, e);
    },
    /**
     * @method search
     * @description 关键字搜素事件
     * @param {String} type 事件名称
     * @param {String} value 搜索词
     */
    search(type, value) {
      if (type === this.triggerType) {
        if (this.searchTimer) {
          clearTimeout(this.searchTimer);
          this.searchTimer = null;
        }
        this.searchTimer = setTimeout(() => {
          this.setKeyWord(value);
        }, 80);
      }
    },
    /**
     * @method setKeyWord
     * @description 设置过滤关键词
     * @param {String} value  关键词
     */
    setKeyWord(value) {
      this.keywordFilter = value;
    },
    /**
     * @method all
     * @description 全选事件
     */
    all() {
      this.list.forEach((v) => {
        if (!v[this.disabledName] || !this.useDisabled) {
          if (
            v[this.labelName].toUpperCase().includes(this.keywordFilter.toUpperCase())
          ) {
            //
            v[this.isCheckedName] = true;
            v[this.indeterminateName] = false;
          }
        }
      });

      this.$emit("on-all");
    },
    /**
     * @method clear
     * @description 清空事件
     */
    clear() {
      this.list.forEach((v) => {
        if (!v[this.disabledName] || !this.useDisabled) {
          v[this.isCheckedName] = false;
          v[this.indeterminateName] = false;
        }
      });
      this.$emit("on-clear");
    },

    /**
     * @method clear
     * @description 清空事件
     */
    clearValue() {
      this.inputKeyWord = ''
      this.search(this.triggerType,'')
    },
    /**
     * @method setSelectedIds
     * @description 子项ID数组可进行回显
     * @param {Array} ids 数组
     * @param {Boolean} cover 是否覆盖之前的选中值
     */
    setSelectedIds(ids,cover=true) {
      if (this.isCheckBox) {
        const map = {};
        ids.forEach((id) => {
          map[id] = true;
        });
        this.list.forEach((li) => {
          if (
            map[li[this.valueName]] &&
            (!this.useDisabled ||
            !li[this.disabledName])
          ) {
            li[this.isCheckedName] = true;
          }
          if (
            !map[li[this.valueName]] &&
            (!this.useDisabled ||
            !li[this.disabledName])
          ) {
            li[this.isCheckedName] = false;
          }
        });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.virtual-list {
  box-shadow: 0 0 8px rgba(0, 0, 0, 20%);
  background-color: var(--dhd-bottom);
  border-radius: 4px;
  overflow: hidden;
  // border-radius: 4px;
  /deep/.ivu-select-item {
    padding: 0 8px;
  }
  /deep/.ivu-checkbox-inner {
    box-shadow: none;
  }
  .select-all {
    height: 36px;
    line-height: 36px;
    position: relative;
    & > span {
      position: absolute;
      cursor: pointer;
      top: 2px;
      &:hover {
        color: var(--primary);
      }
    }
    .all {
      left: 10px;
    }
    .clear {
      right: 10px;
    }
  }
  .list-search {
    margin-bottom: 4px;
    position: relative;
    left: 1px;
    // width: calc(100% + 1px);
    /deep/.ivu-input {
      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
  }
  .no-data {
    text-align: center;
    color: var(--placeholder);
    line-height: 3;
  }
  .select-list {
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    .select-li {
      position: relative;
      & > span {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        width: calc(100%);
        padding-right: 10px;
      }
      .item-icon {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .loading {
      animation: rotation 2s linear infinite;
    }
  }
  .select-list-blank {
    position: relative;
    .select-list-wrap {
      position: relative;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
    }
  }
  /deep/.icon-clear-wrap{
    .icon-clear{
      position: absolute;
      right: 10px;
      top: 8px;
      cursor: pointer;
      display: none;
     
    }
    &:hover{
        .icon-clear{
          display: block;
        }
        .ivu-icon-ios-search{
          display: none;
        }
    }
  }
}
@keyframes rotation {
  from {
    transform: translateY(-50%) rotate(0deg);
  }
  to {
    transform: translateY(-50%) rotate(360deg);
  }
}
</style>