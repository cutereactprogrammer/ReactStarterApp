import './employee-list-item.css';

const EmployeeListItem = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         increase: false,
    //         like: false
    //     }
    // }

    // onIcrease = () => {
    //     this.setState(({ increaseNew }) => ({
    //         increase: !increaseNew
    //     }))
    // }

    // isLiked = () => {
    //     this.setState(({ like }) => ({
    //         like: !like
    //     }))
    // }

    //  Поскольку теперь все контролируется методами onToggleIncrease и onToggleRise
    // которые находятся далеко, нам больше не нужны здешние методы onIcrease и 
    // isLiked, поэтому мы все убираем и переделываем классовый компонент обратно 
    // в функциональный

    // render() {
    const { name, salary, onDelete, onToggleProp, increase, rise } = props;
    // const { increase } = this.state;
    // const { like } = this.state;
    let classNames = "list-group-item d-flex justify-content-between";

    if (increase) {
        classNames += ' increase';
    }

    if (rise) {
        classNames += ' like';
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label"
                onClick={onToggleProp}
                data-toggle="rise"
                style={{ fontSize: 25, color: 'red' }}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
    // }
}

export default EmployeeListItem;