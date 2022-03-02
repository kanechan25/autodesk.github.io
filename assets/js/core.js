export default function html([first, ...strings], ...values) {
    return values.reduce(
        (acc, cur) => acc.concat(cur, strings.shift()),
        // reduce() từ hàm html -> mỗi lần pass qua -> concat acc + cur + strings.shift() 
        // strings.shift() : những thằng còn lại sau khi destructuring, 
        // shift -> lấy ra và xóa đi luôn phần từ đầu tiên trong mảng
        [first]
    )
    .filter(x => x && x !== true || x === 0) 
    //filter đi những phần từ true/false, giữ lại giá trị 0
    .join('')
}

export function createStore(reducer) {
    let state = reducer()
    const roots = new Map()

    function render() {
         for (const [root, component] of roots) {
             //component bản chất là html
             //root là element trong DOM
             const output = component() // component() là 1 function, return ra chuỗi html
             root.innerHTML = output
         }
    }
    //return ra những methods dùng để làm việc với store
    return {
        attach(component, root) {
            roots.set(root, component)
            render()
        },
        connect(selector = state => state) {
            //state là giá trị mặc định của selector khi không truyền gì
            return component => (props, ...args) =>
            component(Object.assign({}, props, selector(state), ...args))
            //Bản chất, nếu default thì selector(state), ...args) chính là state
            //selector(state), ...args) : lấy hết tất cả các đối số truyền vào (dùng toán tử rest)
        }, // 
        dispatch(action, ...args) {
            //action: hành động thực thi
            //...args: những dữ liệu cần thiết, ví dụ thêm, sửa, xóa thì phải đẩy thêm cái gì cần xóa
            state = reducer(state, action, args)
            render();
        }
    }
}





