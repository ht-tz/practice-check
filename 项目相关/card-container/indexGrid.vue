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