<template>
    <Form
        :ref="formValidate"
        :class="[
            formClassName,
            specialForm && 'specialForm',
            isSearchBar ? 'isSearchBar' : ''
        ]"
        :model="form"
        :label-colon="true"
        :style="{ '--width': (labelWidth || 0) + 'px' }"
        @submit.native.prevent
    >
        <Row
            :gutter="layout.rowGutter"
            :type="layout.rowType"
            :align="layout.rowAlign"
            :justify="layout.rowJustify"
            :class-name="layout.rowClassName"
            class="flex-row"
        >
            <template v-for="(item, index) in formList">
                <Col
                    :span="item.span || 12"
                    :order="item.order"
                    :offset="item.offset"
                    :push="item.push"
                    :pull="item.pull"
                    :class-name="item.className"
                    :key="index"
                    v-if="!hideItem(item.paramName)"
                    class="flex-col"
                    :class="[
                        item.type === 'checkbox'
                            ? ''
                            : item.type === 'radio'
                            ? ''
                            : 'specialItem',
                        item.type === 'radio' ? 'gFormRadio' : ''
                    ]"
                >
                    <FormItem
                        :key="'item' + index"
                        :prop="item.paramName"
                        :label="item.label"
                        :title="item.label"
                        :labelWidth="item.labelWidth || labelWidth"
                        :rules="
                            item.rules ||
                                (item.type === 'text'
                                    ? valid
                                    : item.type === 'textarea'
                                    ? validTextarea
                                    : [])
                        "
                        :error="item.error"
                        :class="isDetailForm ? 'detailForm' : ''"
                        :show-message="item.showMessage"
                        :required="item.required"
                    >
                        <render-form-div
                            v-if="'formRender' in item && isDetailForm"
                            :value="form[item.paramName]"
                            :slefRender="item.formRender"
                        ></render-form-div>
                        <template v-else>
                            <Input
                                v-if="
                                    item.type === 'text' ||
                                        item.type === 'textarea' ||
                                        item.type === 'password'
                                "
                                :rows="item.rows || 2"
                                :autosize="
                                    item.autosize || { minRows: 2, maxRows: 3 }
                                "
                                :wrap="item.wrap"
                                :spellcheck="item.spellcheck"
                                :ref="item.paramName"
                                :type="item.type"
                                :title="
                                    item.type === 'password'
                                        ? ''
                                        : form[item.paramName]
                                "
                                v-model="form[item.paramName]"
                                :placeholder="item.placeholder || ''"
                                :disabled="item.disabled || false"
                                :readonly="item.readonly || false"
                                :style="{
                                    width: item.inputWidth || '200px',
                                    marginLeft: marginLeftStyle(
                                        item.alignLabel,
                                        item.labelWidth
                                    )
                                }"
                                :maxlength="
                                    item.maxlength ||
                                        (item.type === 'text' ? 50 : 255)
                                "
                                :show-word-limit="item.showWordLimit || false"
                                :number="item.number"
                                :search="item.search"
                                :icon="item.icon"
                                :prefix="item.prefix"
                                :suffix="item.suffix"
                                :clearable="item.clearable"
                                :size="item.size"
                                @on-click="
                                    handleFun(arguments, item.clickEvent)
                                "
                                @on-change="handleFun(arguments, item.onChange)"
                                @on-enter="handleFun(arguments, item.onEnter)"
                                @on-focus="handleFun(arguments, item.onFocus)"
                                @on-blur="handleFun(arguments, item.onBlur)"
                                @on-keyup="handleFun(arguments, item.onKeyup)"
                                @on-keydown="
                                    handleFun(arguments, item.onKeydown)
                                "
                                @on-keypress="
                                    handleFun(arguments, item.onKeypress)
                                "
                                @on-search="handleFun(arguments, item.onSearch)"
                                @on-clear="handleFun(arguments, item.onClear)"
                            />
                            <!-- 
						classType:button 按钮样式
						vertical:是否垂直排列 默认false
						size:尺寸，可选值为large、small、default或者不设置
						Radio配置------------
						label	只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目	String | Number	-
						disabled：是否禁用当前项	Boolean	false
						size：单选框的尺寸，可选值为 large、small、default
						border 是否显示边框	Boolean	false
							-->
                            <RadioGroup
                                @on-change="handleFun(arguments, item.onChange)"
                                v-model="form[item.paramName]"
                                :ref="item.paramName"
                                v-if="item.type === 'radio'"
                                :type="item.classType"
                                :vertical="item.vertical"
                                :size="item.size"
                                :style="{
                                    marginLeft: marginLeftStyle(
                                        item.alignLabel,
                                        item.labelWidth
                                    )
                                }"
                            >
                                <Radio
                                    v-for="(i, idx) in item.options"
                                    :key="idx"
                                    :label="i.value"
                                    :disabled="item.disabled || i.disabled"
                                    :size="i.size"
                                    :border="i.border"
                                    @on-change="
                                        handleFun(arguments, i.onChange)
                                    "
                                >
                                    <span :title="i.tips || i.label">{{
                                        i.label
                                    }}</span>
                                </Radio>
                            </RadioGroup>
                            <CheckboxGroup
                                v-model="form[item.paramName]"
                                :ref="item.paramName"
                                v-if="item.type === 'checkbox'"
                                @on-change="handleFun(arguments, item.onChange)"
                                :size="item.size"
                                :style="{
                                    marginLeft: marginLeftStyle(
                                        item.alignLabel,
                                        item.labelWidth
                                    )
                                }"
                            >
                                <Checkbox
                                    v-for="(i, idx) in item.options"
                                    :key="idx"
                                    :label="i.value"
                                    :disabled="item.disabled || i.disabled"
                                    :size="i.size"
                                    :border="i.border"
                                    @on-change="
                                        handleFun(arguments, i.onChange)
                                    "
                                >
                                    <span :title="i.tips || i.label">{{
                                        i.label
                                    }}</span>
                                </Checkbox>
                            </CheckboxGroup>
<!-- 
						multiple	是否支持多选	Boolean	false
						disabled	是否禁用	Boolean	false
						clearable	是否可以清空选项，只在单选时有效	Boolean	false
						filterable	是否支持搜索	Boolean	false
						filter-by-label 在搜索时，是否只按照 label 进行搜索	
						remote	是否使用远程搜索	Boolean	false
						remote-method	远程搜索的方法	Function	-
						loading	当前是否正在远程搜索	Boolean	false
						loading-text 远程搜索中的文字提示	String	加载中
						label	仅在 remote 模式下，初始化时使用。因为仅通过 value 无法得知选项的 label，需手动设置。
						default-label 远程搜索时，显示默认 label
						size 选择框大小，可选值为large、small、default或者不填
						placeholder	选择框默认文字	String	请选择
						not-found-text	当下拉列表为空时显示的内容	String	无匹配数据
						label-in-value	在返回选项时，是否将 label 和 value 一并返回，默认只返回 value	Boolean	false
						placement 弹窗的展开方向，可选值为 top、bottom、top-start、bottom-start、top-end、bottom-end	String	bottom-start
						transfer 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果	Boolean	false
						element-id	给表单元素设置 id，详见 Form 用法。	String	-
						transfer-class-name 开启 transfer 时，给浮层添加额外的 class 名称	
						prefix 在 Select 内显示图标	
						max-tag-count 多选时最多显示多少个 tag	Number	-
						max-tag-placeholder 隐藏 tag 时显示的内容，参数是剩余项数量	
						allow-create 是否允许用户创建新条目，需开启 filterable	Boolean	false
						capture 是否开启 capture 模式，也可通过全局配置
							-->
                            <G-Select
                                class="overhidden-select"
                                :prefix="item.prefix"
                                v-model="form[item.paramName]"
                                v-if="item.type === 'select'"
                                :disabled="item.disabled"
                                :placeholder="item.placeholder"
                                :clearable="item.clearable"
                                :filterable="item.filterable"
                                :filter-by-label="item.filterByLabel"
                                :remote-method="
                                    item.remoteMethod ||
                                        remoteMethod(
                                            item.isRemote,
                                            item.urlData,
                                            item
                                        )
                                "
                                :isSyncLoad="item.isSyncLoad"
                                :otherSyncLoad="item.otherSyncLoad"
                                :size="item.size"
                                :multiple="item.multiple"
                                :maxSelSize="item.maxSelSize"
                                :minSelSize="item.minSelSize"
                                :loading="item.loading"
                                :loading-text="item.loadingText"
                                :not-found-text="item.notFoundContent"
                                :default-label="item.defaultLabel"
                                :label-in-value="item.labelInValue"
                                :placement="item.placement"
                                :max-tag-count="item.maxTagCount"
                                :transfer="
                                    'transfer' in item ? item.transfer : true
                                "
                                :transfer-class-name="item.transferClassName"
                                :max-tag-placeholder="item.maxTagPlaceholder"
                                :ref="item.paramName"
                                :allow-create="item.allowCreate || false"
                                :isScrollLoad="item.isScrollLoad"
                                :style="{
                                    width: item.inputWidth || '200px',
                                    marginLeft: marginLeftStyle(
                                        item.alignLabel,
                                        item.labelWidth
                                    )
                                }"
                                @blur.native="handleFun(arguments, item.onblur)"
                                @on-select="
                                    handleFun(
                                        [
                                            ...arguments,
                                            item.onSelectOption || []
                                        ],
                                        item.onSelect
                                    )
                                "
                                @mouseenter.native="
                                    handleFun(arguments, item.onMouseenter)
                                "
                                @on-set-default-options="
                                    handleFun(arguments, item.onSetOptions)
                                "
                                @on-create="handleFun(arguments, item.onCreate)"
                                @on-open-change="
                                    handleFun(arguments, item.onOpenChange)
                                "
                                @on-clear="handleFun(arguments, item.onClear)"
                                @on-query-change="
                                    handleFun(arguments, item.onQueryChange)
                                "
                                @on-change="handleFun(arguments, item.onChange)"
                                @on-errorSelect="
                                    handleFun(arguments, item.errorSelect)
                                "
                                @on-scrollLoad="
                                    handleFun(arguments, item.scrollLoad)
                                "
                                @on-syncSetOpt="
                                    syncSetOpt(arguments, item, index)
                                "
                                @on-selectOtherParams="handleFun(arguments, item.onSelectOtherParams)"
                            >
                                <Option
                                    v-for="(option, idx) in item.options"
                                    :value="option.value"
                                    :label="option.label"
                                    :key="option.value + idx"
                                    :disabled="option.disabled || false"
                                    @click.native="
                                        handleFun(
                                            [...option],
                                            item.onGetMoreParams
                                        )
                                    "
                                    :title="option.tips || option.label"
                                >
                                    {{ option.label }}
                                </Option>
                            </G-Select>
                <!-- 日期控件 -->
                <DatePicker
                                v-if="item.dateType === 'datePicker'"
                                :type="item.type || 'date'"
                                v-model="form[item.paramName]"
                                :title="form[item.paramName]"
                                :placeholder="item.placeholder || ''"
                                :disabled="item.disabled || false"
                                :format="item.format || 'yyyy-MM-dd'"
                                :placement="item.placement"
                                :options="item.options || options(item)"
                                :split-panels="item.splitPanels"
                                :multiple="item.multiple"
                                :show-week-numbers="item.showWeekNumbers"
                                :start-date="item.startDate"
                                :confirm="item.confirm"
                                :open="item.open"
                                :size="item.size"
                                :clearable="item.clearable"
                                :readonly="item.readonly"
                                :editable="item.editable"
                                :transfer="item.transfer"
                                :time-picker-options="item.timePickerOptions"
                                :separator="item.separator"
                                :capture="item.capture"
                                :ref="item.paramName"
                                :style="{
                                    width: item.inputWidth || '200px',
                                    marginLeft: marginLeftStyle(
                                        item.alignLabel,
                                        item.labelWidth
                                    )
                                }"
                                :transfer-class-name="item.transferClassName"
                                @on-change="
                                    handleFun(arguments, item.onChange, item)
                                "
                                @on-open-change="
                                    handleFun(arguments, item.OpenChange)
                                "
                                @on-ok="handleFun(arguments, item.ok)"
                                @on-clear="handleFun(arguments, item.onClear)"
                                @on-clickoutside="
                                    handleFun(arguments, item.onClickoutside)
                                "
                            />
                            <TimePicker
                                :placeholder="item.placeholder || ''"
                                v-if="item.dateType === 'timePicker'"
                                :type="item.type || 'time'"
                                :style="{
                                    width: item.inputWidth || '200px',
                                    marginLeft: marginLeftStyle(
                                        item.alignLabel,
                                        item.labelWidth
                                    )
                                }"
                                v-model="form[item.paramName]"
                                :title="form[item.paramName]"
                                :format="item.format || 'HH:mm:ss'"
                                @on-change="handleFun(arguments, item.onChange)"
                                @on-open-change="
                                    handleFun(
                                        arguments,
                                        item.onOpenChange,
                                        item
                                    )
                                "
                                @on-ok="handleFun(arguments, item.onOk)"
                                @on-clear="handleFun(arguments, item.onClear)"
                                :disabled="item.disabled || false"
                                :clearable="item.clearable"
                                :steps="item.steps"
                                :ref="item.paramName"
                                :placement="item.placement"
                                :confirm="item.confirm"
                                :open="item.open"
                                :size="item.size"
                                :readonly="item.readonly"
                                :editable="item.editable || false"
                                :transfer="item.transfer"
                                :separator="item.separator"
                                :transfer-class-name="item.className"
                                :hide-disabled-options="
                                    item.hideDisabled || false
                                "
                                :disabled-hours="
                                    item.DisabledHours || getDisabledHours(item)
                                "
                                :disabled-minutes="
                                    item.DisabledMinutes ||
                                        getDisabledMinutes(item)
                                "
                                :disabled-seconds="
                                    item.DisabledSeconds ||
                                        getDisabledSeconds(item)
                                "
                            />
                            <InputNumber
                                v-if="item.type === 'inputNumber'"
                                :max="item.max"
                                :min="item.min"
                                :step="item.step"
                                :placeholder="item.placeholder"
                                :style="{
                                    width: item.inputWidth || '200px',
                                    marginLeft: marginLeftStyle(
                                        item.alignLabel,
                                        item.labelWidth
                                    )
                                }"
                                :disabled="item.disabled"
                                @on-change="handleFun(arguments, item.onChange)"
                                @on-focus="handleFun(arguments, item.onFocus)"
                                @on-blur="handleFun(arguments, item.onBlur)"
                                v-model="form[item.paramName]"
                                :title="form[item.paramName]"
                                :active-change="item.activeChange"
                                :precision="item.precision"
                                :editable="item.editable"
                                :readonly="item.readonly"
                                :parser="item.parser"
                                :formatter="item.formatter"
                            ></InputNumber>
                            <Slider
                                v-if="item.type === 'slider'"
                                v-model="form[item.paramName]"
                                :max="item.max"
                                :min="item.min"
                                :step="item.step"
                                :disabled="item.disabled"
                                :range="item.range"
                                :show-input="item.showInput"
                                :show-stops="item.showStops"
                                :show-tip="item.showTip"
                                :tip-format="item.tipFormat"
                                :input-size="item.inputSize"
                                :active-change="item.activeChange"
                                :marks="item.marks"
                                :style="{
                                    width: item.inputWidth || '200px',
                                    marginLeft: marginLeftStyle(
                                        item.alignLabel,
                                        item.labelWidth
                                    )
                                }"
                                @on-change="handleFun(arguments, item.onChange)"
                                @on-input="handleFun(arguments, item.onInput)"
                            ></Slider>
                            <component
                                v-if="item.type === 'tree'"
                                :treeId="item.treeId || 'SelectTree'"
                                :is="item.treeType || 'G-SelectTree'"
                                :settings="item.settings"
                                :searchKey="item.searchKey"
                                :isSearch="item.isSearch"
                                :searchPlaceholderText="
                                    item.searchPlaceholderText
                                "
                                :style="{
                                    width: item.inputWidth || '200px',
                                    marginLeft: marginLeftStyle(
                                        item.alignLabel,
                                        item.labelWidth
                                    )
                                }"
                                :overHeight="item.overHeight"
                                :clearable="item.clearable"
                                :disabled="item.disabled"
                                :placeholder="item.placeholder"
                                :rootOpen="item.rootOpen"
                                :isDeepVal="item.isDeepVal"
                                :defaultCheckNodes="item.defaultCheckNodes"
                                @getTreeValue="
                                    handleFun(arguments, item.getTreeValue)
                                "
                                @getTree="handleFun(arguments, item.getTree)"
                            />
                            <slot
                                :name="item.slot"
                                v-if="item.slot"
                                :item="item"
                            ></slot>
                            <div slot="label" v-if="item.labelSlot">
                                <slot :name="item.labelSlot"></slot>
                            </div>
                        </template>
                    </FormItem>
                </Col>
            </template>
            <slot></slot>
        </Row>
    </Form>
</template>
<script>
/**
 * @description G-form组件
 * @author  lff
 * <li_feifan@dahuatech.com>
 * 组件上需要传的值参考iview文档的传值，有类型检查
 * @version 1.0.0
 */
import { validFn } from "./SFvalidator";
import moment from "moment";
import renderFormDiv from "./renderFormDiv";

import { Select, Option, OptionGroup } from "../../B-Select/index.js";
import { printArray, debounce } from "./utils";
import Locale from "../js/locale";
import Form from "@psi/design/lib/form/index.js";
import FormItem from "@psi/design/lib/form-item/index.js";
import Row from "@psi/design/lib/row/index.js";
import Col from "@psi/design/lib/col/index.js";
import DatePicker from "@psi/design/lib/date-picker/index.js";
import Input from "@psi/design/lib/input/index.js";
import RadioGroup from "@psi/design/lib/radio-group/index.js";
import Radio from "@psi/design/lib/radio/index.js";
import CheckboxGroup from "@psi/design/lib/checkbox-group/index.js";
import Checkbox from "@psi/design/lib/checkbox/index.js";
import TimePicker from "@psi/design/lib/time-picker/index.js";
import InputNumber from "@psi/design/lib/input-number/index.js";
import Slider from "@psi/design/lib/slider/index.js";


export default {
    name: "B-form",
    components: {
        Slider,
        InputNumber,
        TimePicker,
        Checkbox,
        CheckboxGroup,
        RadioGroup,
        Radio,
        Form,
        renderFormDiv,
        FormItem,
        Row,
        Col,    
        "G-Select": Select,
        Option,
        OptionGroup,
        DatePicker,
        Input
    },
    mixins: [Locale],
    props: {
        isSearchBar: {
            type: Boolean,
            default: false
        },
        /***
         * 渲染表单项
         * **/
        formList: {
            type: Array,
            default() {
                return [];
            }
        },
        /***
         * 布局，请参考row和col布局
         * **/
        layout: {
            type: Object,
            default() {
                return {};
            }
        },
        /***
         * 可以直接通过外部传来控制formitem中label的宽度，已formlist配置项中labelwidth为最大权限
         * **/
        labelWidth: {
            type: Number
        },
        /***
         * 验证表单ref,暂不考虑同一时间渲染多个的情况 保留 + new Date().valueOf()
         * **/
        formValidate: {
            type: String,
            default: "formValidate"
        },
        /***
         * form表单自定义class
         * **/
        formClassName: {
            type: String
        },
        /***
         * 当前form我对此做了样式限制，如不像默认样式，传false
         * **/
        specialForm: {
            type: Boolean,
            default: true
        },
        /***
         * hideList隐藏指定元素，例如['test'],key值对应paramName,对隐藏的别做rules验证必填改为false
         * **/
        hideList: {
            type: Array,
            default() {
                return [];
            }
        },
        /***
         * isDetailForm  表单展示的是否是详情模式
         * **/
        isDetailForm: {
            type: Boolean,
            default: false
        },
        setEchoData: {
            type: Object
        }
    },
    computed: {},
    watch: {
        // 虽是数组对象  不做深度监听影响性能，此处只是对追加的formlist进行双向绑定
        formList(newV, oldV) {
            let formkeys = Object.keys(this.form);
            let diff = newV.map(item => {
                if (item.paramName && !formkeys.includes(item.paramName)) {
                    if (item.dateType === "datePicker") {
                        this.dateTimeValMap.set(
                            item.paramName,
                            item.format || "yyyy-MM-dd"
                        );
                    }
                    this.$set(this.form, item.paramName, item.initValue);
                }
                let diffData = formkeys.filter(i => i === item.paramName);
                return item.paramName;
            });
            let diffData = formkeys.filter(val => {
                return diff.indexOf(val) === -1;
            });
            diffData.forEach(del => {
                delete this.form[del];
                this.dateTimeValMap.delete(del);
            });
        }
    },

    data() {
        /***
         * 对formlist配置项循环，生成form默认值
         * **/
        let obj = {};
        let dateTimeValMap = new Map();
        this.formList.forEach(item => {
            let defaultVal = "";
            if ("initValue" in item) {
                defaultVal = item.initValue;
            } else if (item.type === "checkbox") {
                defaultVal = [];
            } else if (item.type === "inputNumber" || item.type === "slider") {
                if (item.min) {
                    defaultVal = item.min;
                } else {
                    defaultVal = 1;
                }
            }
            if (item.dateType === "datePicker") {
                dateTimeValMap.set(item.paramName, item.format || "yyyy-MM-dd");
            }
            if ("paramName" in item) {
                obj[item.paramName] = defaultVal;
            }
        });
        if (this.setEchoData) {
            obj = Object.assign(obj, this.setEchoData);
        }
        return {
            form: obj,
            dateTimeValMap: dateTimeValMap,
            valid: validFn(this).treeName("i.empty", false),
            validTextarea: validFn(this).memoCharacter2("i.empty", false)
        };
    },
    model: {
        prop: "formList",
        event: "setFormList"
    },
    methods: {
        syncSetOpt(arg, item, index) {
            this.setParamTarget(item.paramName, "options", arg[0]);
        },
        /**
         * @method marginLeftStyle
         * @description 设置label占位对齐
         * @param {String} alignLabel 是否对齐
         * @param {String} labelWidth 偏移宽度
         */
        marginLeftStyle(alignLabel, labelWidth) {
            if (alignLabel) {
                return labelWidth || "90px";
            } else {
                return "0px";
            }
        },
        // 远程搜索功能，参数一表示是否需要远程加载，默认本地搜索，第二个Promise对象按最新接口方式定义来，第三个传入的所有数据
        remoteMethod(isRemote, urlData, data) {
            if (isRemote) {
                return debounce(function(val) {
                    urlData(val).then(res => {
                        let results = printArray(res);
                        data.options = results.map(i => {
                            return {
                                label: i[data.key.label || "label"],
                                value: i[data.key.value || "value"]
                            };
                        });
                    });
                }, 1000);
            } else {
                return;
            }
        },
        // 加入隐藏显示，因为用的v-show，所以对隐藏的元素尽量别用必填验证，因为隐藏之后这个元素的验证通不过
        hideItem(paramName) {
            return this.hideList.find(
                hideName => paramName && hideName === paramName
            );
        },
        /***
         * 时间框禁止时，返回出去是数组，判断是否有maxTimeParam、minTimeParam存在，存在则对其对应处理判断
         * **/
        getDisabledHours(item) {
            // 判断有没有传最大限制的时间控件
            if (item.maxTimeParam) {
                // 获取最大时间控件的值
                let maxTime = this.form[item.maxTimeParam];
                // 定义一个空数组
                let maxhours = [];
                // 判读是否值是否存在，存在则去处理
                if (maxTime) {
                    // 截取时，转化为数字
                    let maxHour = Number(maxTime.split(":")[0]);
                    // 时最大是24，获取最大时间与24循环，返回最大时间之后的数字
                    for (let i = maxHour + 1; i < 24; i++) {
                        maxhours.push(i);
                    }
                }
                return maxhours;
            } else if (item.minTimeParam) {
                // 最小时间处理原则与最大相差不多，循环相反而已
                let minTime = this.form[item.minTimeParam];
                let minhours = [];
                if (minTime) {
                    let minHour = Number(minTime.split(":")[0]);
                    for (let i = 0; i < minHour; i++) {
                        minhours.push(i);
                    }
                }
                return minhours;
            } else {
                return [];
            }
        },
        /***
         * 时间框禁止分，返回出去是数组，判断是否有maxTimeParam、minTimeParam存在，存在则对其对应处理判断
         * **/
        getDisabledMinutes(item) {
            if (item.maxTimeParam) {
                let maxTime = this.form[item.maxTimeParam];
                let currentTime = this.form[item.paramName];
                let maxhour = Number(maxTime.split(":")[0]);
                let maxMinute = Number(maxTime.split(":")[1]);
                let currenthour = Number(currentTime.split(":")[0]);
                let maxMinutes = [];
                if (maxTime && currenthour === maxhour) {
                    for (let i = maxMinute; i < 59; i++) {
                        maxMinutes.push(i);
                    }
                }
                return maxMinutes;
            } else if (item.minTimeParam) {
                let minTime = this.form[item.minTimeParam];
                let currentTime = this.form[item.paramName];
                let minhour = Number(minTime.split(":")[0]);
                let minMinute = Number(minTime.split(":")[1]);
                let currenthour = Number(currentTime.split(":")[0]);
                let minMinutes = [];
                if (minTime && minhour === currenthour) {
                    for (let i = 0; i < minMinute; i++) {
                        minMinutes.push(i);
                    }
                }
                return minMinutes;
            } else {
                return [];
            }
        },
     
        getDisabledSeconds(item) {
            if (item.maxTimeParam) {
                let maxTime = this.form[item.maxTimeParam];
                let currentTime = this.form[item.paramName];
                let maxhour = Number(maxTime.split(":")[0]);
                let maxMinute = Number(maxTime.split(":")[1]);
                let maxSecond = Number(maxTime.split(":")[2]);
                let currenthour = Number(currentTime.split(":")[0]);
                let currentMinute = Number(currentTime.split(":")[1]);
                let maxSeconds = [];
                if (
                    maxTime &&
                    currenthour === maxhour &&
                    maxMinute === currentMinute
                ) {
                    for (let i = maxSecond; i < 59; i++) {
                        maxSeconds.push(i);
                    }
                }
                return maxSeconds;
            } else if (item.minTimeParam) {
                let minTime = this.form[item.minTimeParam];
                let currentTime = this.form[item.paramName];
                let minhour = Number(minTime.split(":")[0]);
                let minMinute = Number(minTime.split(":")[1]);
                let minSecond = Number(minTime.split(":")[2]);
                let currenthour = Number(currentTime.split(":")[0]);
                let currentMinute = Number(currentTime.split(":")[1]);
                let minSeconds = [];
                if (
                    minTime &&
                    minhour === currenthour &&
                    currentMinute === minMinute
                ) {
                    for (let i = 0; i < minSecond; i++) {
                        minSeconds.push(i);
                    }
                }
                return minSeconds;
            } else {
                return [];
            }
        },
        /**
         * 最大最小时间判断
         */
        options(item) {
            if (item.maxDateParam) {
                return {
                    disabledDate: date => {
                        return (
                            (date &&
                                date.valueOf() >
                                    new Date(
                                        this.form[item.maxDateParam]
                                    ).valueOf()) ||
                            (date &&
                                date.valueOf() <
                                    new Date()
                                        .setDate(
                                            new Date(
                                                item.currentTime
                                            ).getDate() - 1
                                        )
                                        .valueOf())
                        );
                    }
                };
            } else if (item.minDateParam) {
                return {
                    disabledDate: date => {
                        return (
                            (date &&
                                date.valueOf() <
                                    new Date(
                                        this.form[item.minDateParam]
                                    ).valueOf()) ||
                            (date &&
                                date.valueOf() <
                                    new Date()
                                        .setDate(
                                            new Date(
                                                item.currentTime
                                            ).getDate() - 1
                                        )
                                        .valueOf())
                        );
                    }
                };
            }
        },
        /**
         *全部表单验证
         */
        validate(callback) {
            this.$refs[this.formValidate].validate(valid => {
                callback(valid, this.getValues());
            });
        },
        /**
         *指定表单验证
         */
        validateField(prop, callback) {
            this.$refs[this.formValidate].validateField(prop, valid => {
                let form = this.getValues();
                callback(valid, form[prop]);
            });
        },
        /**
         *表单清空
         */
        resetFields() {
            this.$refs[this.formValidate].resetFields();
            return this.form;
        },
        /**
         * 处理函数，如果用户有传入对应的处理函数则使用，否则直接返回
         */
        handleFun(args, fn, item) {
            // 此判断针对于时间选择框，如果从秒、分、时倒叙开始选择、上面disabled这些方法就有bug，所以判断如果最大时间小于了最小时间，则对最大时间清空
            if (item && item.dateType === "timePicker") {
                let date =
                    new Date().toLocaleDateString().replace(/\//g, "-") + " ";
                if (
                    item.dateType &&
                    item.dateType === "timePicker" &&
                    item.minTimeParam &&
                    this.form[item.minTimeParam]
                ) {
                    if (
                        new Date(date + this.form[item.paramName]).valueOf() <
                        new Date(date + this.form[item.minTimeParam]).valueOf()
                    ) {
                        this.form[item.paramName] = "";
                    }
                } else if (
                    item.dateType &&
                    item.dateType === "timePicker" &&
                    item.maxTimeParam &&
                    this.form[item.maxTimeParam]
                ) {
                    if (
                        new Date(date + this.form[item.paramName]).valueOf() >
                        new Date(date + this.form[item.maxTimeParam]).valueOf()
                    ) {
                        this.form[item.paramName] = "";
                    }
                }
            }
            if (typeof fn === "function") {
                return fn.apply(this, args);
            } else {
                return;
            }
        },
        /**
         * 设置form中的value值
         */
        setValues(value) {
            if (value.constructor === Object) {
                for (let key in value) {
                    this.$set(
                        this.form,
                        key,
                        typeof value[key] == "string"
                            ? value[key].trim()
                            : value[key]
                    );
                }
            }
        },
        /**
         * 获取form中的值，默认获取全部，传入数组字符串获取指定
         */
        getValues(data) {
            let that = this;
            // 使用变量，少去触发data数据
            let form = that.form;
            for (let [key, value] of this.dateTimeValMap) {
                value = value.replace(/y/gi, "Y").replace(/d/gi, "D");
                if (
                    form[key] &&
                    !isNaN(Date.parse(form[key])) &&
                    form[key] instanceof Date
                ) {
                    form[key] = moment(form[key]).format(value);
                } else if (form[key] && Array.isArray(form[key])) {
                    form[key] = form[key].map(
                        i =>
                            (i =
                                !isNaN(Date.parse(i)) && i instanceof Date
                                    ? moment(i).format(value)
                                    : i)
                    );
                }
            }
            if (data && Array.isArray(data)) {
                let obj = {};
                data.forEach(key => {
                    obj[key] = this.form[key];
                });
                return obj;
            } else {
                return this.form;
            }
        },
        setParamTarget(paramName, key, value) {
            let index = this.formList.findIndex(i => i.paramName === paramName);
            if (index > -1) {
                if (Array.isArray(key)) {
                    key.forEach((i, idx) => {
                        if (value[idx] !== undefined) {
                            this.formList[index][i] = value[idx];
                        }
                    });
                } else {
                    this.formList[index][key] = value;
                }
            }
        }
    },
    created() {},
    mounted() {}
};

<style lang="less" scoped>
.isSearchBar {
    /deep/.ivu-form-item-content {
        width: auto !important;
    }
    .ivu-form-item-content {
        width: auto !important;
    }
}
.specialForm {
    .overhidden-select {
        /deep/.ivu-select-dropdown {
            width: inherit;
        }
        /deep/.ivu-select-item {
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
    .flex-row {
        display: flex;
        flex-wrap: wrap;
        .flex-col {
            float: none;
        }
    }
    .ivu-form-item {
        width: 100%;
        margin-bottom: 8px;
    }
    /deep/.ivu-form-item-content  {
        float: left;
        margin-left: 0 !important;
        line-height: 28px;
        width: calc(~"100% - var(--width)");
    }
    /deep/.gFormRadio .ivu-form-item-content {
        line-height: 28px;
    }
    /deep/.ivu-form-item-label {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 28px;
        padding: 0px 12px 0px 0;
    }
    /deep/.ellipsis {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .ivu-form-item-content  {
        float: left;
        margin-left: 0 !important;
        line-height: 28px;
        width: calc(~"100% - var(--width)");
    }
    .gFormRadio .ivu-form-item-content {
        line-height: 28px;
    }
    .ivu-form-item-label {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 28px;
        padding: 0px 12px 0px 0;
    }
    .ellipsis {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
}
/deep/.detailForm {
    .ivu-form-item-label {
        &::before {
            content: "" !important;
        }
    }
}
.detailForm {
    .ivu-form-item-label {
        &::before {
            content: "" !important;
        }
    }
}
</style>
<style>
/* .ivu-form-item-content  {
    width: calc(100% - var(--width)) !important;
} */
</style>
