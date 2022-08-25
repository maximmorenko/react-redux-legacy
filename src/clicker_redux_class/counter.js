import { connect } from "react-redux";
import { increment, decrement, reset } from "../app/store";
import { Component } from "react";


class _Counter extends Component {
    render() {
        console.log(this.props); // если вывести в логи пропсы то мы увидем там функцию диспатч
        // ту же что и доставали из хука диспатч
        return (
            <div>
                {/* теперь значение каунт будет браться из пропсов и динамически обновляться */}
                <h2>{this.props.count}</h2> 
                <button onClick={this.props.dec}>-</button>
                <button onClick={this.props.inc}>+</button>
                <button onClick={this.props.res}>reset</button>
            </div>
        );
    }
}

// две функции коннекта:
// первая принимает данные (state), а на выходе формируем объект с данными, которые будем передавать в пропсы
const mapStateToProps = (state) => ({
    // достаем редюсер из комбаина (count)
    count: state.count, // теперь в пропсах будет каунт со значением 0
})

const mapDispatchToProps = {
  inc: increment,
  dec: decrement,
  res: reset
};

export const Counter = connect(
    // у коннекта два параметра, две функции
    mapStateToProps, //вернет данные, (если тужны только методы, то первым параметром нужно передать null)
    mapDispatchToProps, // вторая вернет экшины (методы)
)(_Counter); // оборачиваем компонент в connect
