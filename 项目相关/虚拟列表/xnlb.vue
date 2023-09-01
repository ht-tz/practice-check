<template>
    <div
        class="virtual-select"
        ref="virtualselect"
        :style="{ width: `${styleWidth}` }"
    >
        <div class="select-input" ref="inputBox">
            <Input
                :title="showValue"
                :disabled="disabled"
                type="text"
                @click.native="showDropDown(!showSlideBox)"
                @on-keydown="showDropDown(true)"
                v-model="showValue"
                @on-change="seachChange"
                :placeholder="placeholder"
            ></Input>
            <Icon
                type="ios-close-circle"
                :class="['icon', 'icon2', { 'icon-disabled': disabled }]"
                v-if="showClear"
                @click.native.stop="clearValue"
            />
            <Icon
                type="ios-arrow-down"
                :class="[
                    'icon',
                    'icon1',
                    {
                        isUp: showSlideBox,
                        'icon-disabled': disabled,
                        icon3: showClear,
                    },
                ]"
            />
        </div>
        <div
            class="list"
            v-show="showSlideBox"
            :style="{
                position: 'absolute',
                top: top + realHeight + 2 + 'px',
                zIndex: 1001,
                left: left + 'px',
            }"
            ref="bListWrap"
        >
            <BVirtualList
                type="simple"
                :withSelectAll="false"
                :withSearch="false"
                :list="list"
                :width="realWidth"
                :height="listHeight"
                :labelName="labelName"
                :valueName="valueName"
                :itemHeight="itemHeight"
                :disabledName="disabledName"
                @on-click="selectItem"
                @on-search="listChange"
                ref="bList"
            >
                <div slot="no-data">{{ noDataWord }}</div>
            </BVirtualList>
        </div>
    </div>
</template>
<script>
import BVirtualList from "../B-VirtualList/index";
import Input from "@psi/design/lib/input";
import Icon from "@psi/design/lib/icon";
export default {
    name: "BVirtualSelect",
    inheritAttrs: true,
    model: {
        prop: "value",
        event: "input",
    },
    components: {
        Icon,
        Input,
        BVirtualList,
    },
    props: {
        // ...BVirtualList.$props,
        // 是否禁用
        value: {
            type: Number | String,
            default: "",
        },
        list: {
            type: Array,
            default: () => [],
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        // 父级盒子的宽度
        width: {
            type: Number | String,
            default: "100%",
        },
        // 父级盒子的高度
        height: {
            type: Number,
            default: 500,
        },
        // 子项的高度
        itemHeight: {
            type: Number,
            default: 36,
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
        disabledName: {
            type: String,
            default: "disable",
        },
        placeholder: {
            type: String,
            default: "请输入关键词",
        },
        noDataWord: {
            type: String,
            default: "没有搜索结果",
        },
    },
    data() {
        return {
            // 显示的文字
            showValue: "",
            showSlideBox: false, //是否显示下拉框
            isSearch: true, //是否搜索模式
            listHeight: 0,
            realHeight: 0,
            realWidth: 0,
            top: 0,
            left: 0,
            resizeTimer: null,
        };
    },
    computed: {
        styleWidth() {
            if (typeof this.width === "number") {
                return this.width + "px";
            } else {
                if (!isNaN(this.width)) return this.width + "px";
                return this.width;
            }
        },
        showClear() {
            return (
                this.value !== "" &&
                this.value !== null &&
                this.value !== "undefined"
            );
        },
    },
    // 当监听到list或value变化时，实时转化value为label
    watch: {
        list: {
            handler() {
                this.setValue();
            },
            immediate: true,
        },
        value: {
            handler() {
                this.setValue();
            },
            immediate: true,
        },
        showValue() {
            this.setShowValue();
        },
    },
    mounted() {
        this.listHeight = this.height - this.$refs.inputBox.clientHeight;
        document.addEventListener("click", this.clickoutside);
        this.$refs.bListWrap &&
            window.document.body.appendChild(this.$refs.bListWrap);
        this.resize();
        // 监听
        const _this = this;
        this.resizeObserver = new ResizeObserver(() => {
            _this.resize();
        });
        this.resizeObserver.observe(this.$refs.inputBox);
        window.addEventListener('resize',_this.resize)
    },
    beforeDestroy() {
        // 组件销毁前，销毁下拉框
        this.$refs.bListWrap &&
            this.$refs.bListWrap.parentElement.removeChild(
                this.$refs.bListWrap
            );
        document.removeEventListener("click", this.clickoutside);
        window.removeEventListener('resize',_this.resize)
    },
    deactivated() {
        // 组件未激活时，关闭下拉框
        this.showDropDown(false);
    },
    methods: {
        setShowValue() {
            if (this.$refs.bList) {
                let item = null;
                this.list.forEach((v) => {
                    if (v[this.labelName] + "" === this.showValue + "") {
                        v.isSelected = true;
                        item = v;
                    } else {
                        v.isSelected = false;
                    }
                });

                if (item && !this.isSearch)
                    this.$emit("input", item[this.valueName]);
                else {
                    // this.$emit("input", "");
                    // this.isSearch = true;
                }
                if (this.isSearch) this.$refs.bList.setKeyWord(this.showValue);
                else this.$refs.bList.setKeyWord("");
            }
        },
        /**
         * @method resize
         * @description 监听input框的大小变换
         */
        resize() {
            // if (this.resizeTimer) clearTimeout(this.resizeTimer);
            // this.resizeTimer = setTimeout(() => {
                if (!this.$refs.inputBox) return;
                this.realWidth = this.$refs.inputBox.clientWidth || 0;
                this.realHeight = this.$refs.inputBox.clientHeight || 0;
                const offset = this.getElementOffset(this.$refs.inputBox);
                // 如果在屏幕最底部，则弹窗向上
                const offsetS = this.$refs.inputBox.getBoundingClientRect();
                if (offsetS.bottom + this.listHeight > window.innerHeight) {
                    this.top = offset.top - this.height - 10;
                } else {
                    this.top = offset.top;
                }
                this.left = offset.left;
            // }, 30);
        },
        /**
         * @method seachChange
         * @description 输入框的change事件
         */
        seachChange() {
            this.isSearch = true;
        },
        /**
         * @method showDropDown
         * @description 开启关闭下拉框
         * @param {Boolean} flag 开启关闭下拉框的标志
         */
        showDropDown(flag) {
            if (this.disabled) {
                this.showSlideBox = false;
                return;
            }
            this.showSlideBox = Boolean(flag);
            this.$emit("popup-visible-change", this.showSlideBox);
            if (this.showSlideBox) {
                this.resize();
            }
            this.setShowValue();
        },
        /**
         * @method selectItem
         * @description 下拉框点击选择事件
         * @param {Object} item list子项的值
         */
        selectItem(item, e) {
            if (item[this.disabledName]) return;
            this.isSearch = false;
            this.$emit("input", item[this.valueName]);
            this.$emit("on-click", item, e);
            this.showValue = item[this.labelName];
            this.showDropDown(false);
        },
        /**
         * @method clickoutside
         * @description 外部点击事件的判断
         * @param {object} e event
         */
        clickoutside(e) {
            if (!this.$refs.virtualselect.contains(e.target)) {
                this.showDropDown(false);
                this.setValue();
            }
        },
        /**
         * @method setValue
         * @description  通过list将value的转化为lable并赋值给showValue
         */
        setValue() {
            this.isSearch = false;
            if (this.value || this.value === 0) {
                const item = this.list.find(
                    (v) => v[this.valueName] + "" === this.value + ""
                );
                if (item) {
                    this.showValue = item[this.labelName];
                } else {
                    this.showValue = "";
                }
            } else {
                this.showValue = "";
            }
        },
        /**
         * @method listChange
         * @description 监听list的长度变化
         */
        listChange(val, list) {
            //
            const realHeight = list.length * this.itemHeight;
            const cheight = this.$refs.inputBox.clientHeight || 0;
            if (realHeight < this.height - cheight && list.length) {
                this.listHeight = realHeight;
            } else {
                if (!list.length) {
                    this.listHeight = this.itemHeight;
                } else {
                    this.listHeight = this.height - cheight;
                }
            }
        },
        /**
         * @method getElementOffset
         * @description 获取节点相对于document左上角的位置
         * @param {Object} dom HTMLElement
         */
        getElementOffset(dom) {
            let top = dom.offsetTop;
            let left = dom.offsetLeft;
            let current = dom.offsetParent;

            while (current !== null) {
                top += current.offsetTop;
                left += current.offsetLeft;
                current = current.offsetParent;
            }
            return { left, top };
        },
        /**
         * @method clearValue
         * @description 清除选择的值
         */
        clearValue() {
            this.$emit("input", "");
        },
    },
};
</script>
<style lang="less" scoped>
.disabled {
    cursor: not-allowed;
}
.virtual-select {
    /deep/.ivu-input {
        padding: 0 24px 0 8px;
        cursor: pointer;
    }
    /deep/.ivu-input-disabled {
        cursor: not-allowed;
    }
    position: relative;
    .no-data {
        text-align: center;
        color: var(--placeholder);
    }
    .select-list {
        position: absolute;
        top: 34px;
        overflow-y: scroll;
        overflow-x: hidden;
        .select-li {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
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
    .select-input {
        position: relative;
        .icon {
            transition: all 0.3s;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 10px;
            &.icon1 {
                pointer-events: none;
            }
            &.icon2 {
                display: none;
                cursor: pointer;
            }
        }
        .isUp {
            transform: rotate(180deg) translateY(50%);
        }
        .icon-disabled {
            color: #ccc;
        }
        &:hover {
            .icon2 {
                display: block;
            }
            .icon3 {
                display: none;
            }
        }
    }
    .list {
        transition: all 0.3s;
    }
}
</style>