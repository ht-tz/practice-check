## 基于虚拟列表的选择框组件

引入方式： import BvirtualSelect from '@psi/common-view-custom/lib/B-VirtualSelect/index';

### 描述

适用于大数据量的下拉选择框

#### 效果图

![转存失败，建议直接上传图片文件](<转存失败，建议直接上传图片文件 http://10.31.27.100:8080/server/index.php?s=/api/attachment/visitFile/sign/d42e43269bc1d06b8501ed6270fd0ee4\&showdoc=.jpg>)

#### demo实例

```html
<!-- 虚拟列表组件 -->
<template>
  <div class="list">
    <div class="li">
      <BVirtualSelect
        v-model="val"
        :list="list1"
        :height="listHeight"
        :labelName="labelName"
        :valueName="valueName"
        :isCheckedName="isCheckedName"
        :width="listWidth"
        :itemHeight="itemHeight"
        :placeholder="`搜索关键字的placeHolder`"
      >
        <template slot="no-data">
          没有数据啦
        </template>
      </BVirtualSelect>
    </div>
   
   <div class="li"><Input v-model="val" /></div>
  </div>
</template>

<script>
import Input from '@psi/design/lib/input';
export default {
  components : {
    Input
  },
  data() {
    return {
        listHeight : 500,
        list1 : [],
        labelName : 'label',
        valueName : 'value',
        isCheckedName : 'isChecked',
        listWidth : 300,
        itemHeight:30,
        val:''
    };
  },
  created() {
    for(let i=0;i<10000;i++){
      this.list1.push({
        label : `子项序列号${i}`,
        value:i
      })
    }
  },
  methods : {
    list1Click(item){
      item.isChecked = !item.isChecked
    }
  }
};
</script>
<style lang="less" scoped>
  .list{
    display: flex;
    .li{
      margin-right: 20px;
    }
  }
</style>


```

***

#### props

|       属性      |         说明        |       类型      |    默认值    |                     备注                    |
| :-----------: | :---------------: | :-----------: | :-------: | :---------------------------------------: |
|     value     |      当前选择项的值      |     String    |   Number  |              可使用v-model进行双向绑定             |
|      list     |       列表的数组项      | Array<Object> |    \[]    | 子项Object{label:1,value:1,isChecked:false} |
|     width     |        盒子宽度       |     Number    |    600    |                     --                    |
|     height    |        盒子高度       |     Number    |    500    |                     --                    |
|   labelName   | list子项里面的显示名称的字段名 |     String    |   label   |                     --                    |
|   valueName   |   list子项里面值的字段名   |     String    |   value   |                     --                    |
|  disabledName |    list子项禁用的字段名   |     String    |  disabled |                     --                    |
| isCheckedName |   list子项是否选中字段名   |     String    | isChecked |             type=checkBox时才生效             |
|  placeholder  |    placeholder    |     String    |  '请输入关键词' |                     --                    |

***

#### events

|    方法    |    说明   |          传参          |
| :------: | :-----: | :------------------: |
| on-click | 子项的点击事件 | item：子项对象，event：鼠标事件 |

***

#### slot

***

#### i18n中英文

***

#### 依赖子组件

*   @psi/design

> Input 输入框组件
> Icon 图标组件

*   BVirtualList
    a
