const isSymmetric = function (root) {
    //后续便比那里左右中
      const  compareNode = function(left,right) {
          //终止条件
          if(left === null && right !==null || left !==null && right === null) {
              return false
          } else if(right == null && left == null) {
              return true
          } else if(left.val !== right.val) {
                return false
          }

          // 单层递归的逻辑
          let outSide = compareNode(left.left, right.right)
          let inSide = compareNode(left.right, right.left)
          return  outSide && inSide
      }

      if (root === null) return true
       return  compareNode(root.left,root.right)
 }