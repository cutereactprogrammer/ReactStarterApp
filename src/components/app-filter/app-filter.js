import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'Все сотрудники', colored: false },
        { name: 'rise', label: 'На повышение', colored: false },
        { name: 'moreThen10000', label: 'З/П больше 1000$', colored: false }
    ];

    const buttons = buttonsData.map(({ name, label, colored }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        const style = colored ? { color: 'red' } : null;
        return (
            <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}
                style={style} >
                {label}
            </button>
        )
    });

    return (
        <div className="btn-group">
            {buttons}

            {/* <button type="button"
                className="btn btn-light">
                Все сотрудники
            </button>
            <button type="button"
                className="btn btn-outline-light">
                На повышение
            </button>
            <button type="button"
                className="btn btn-outline-light">
                З/П больше 1000$
            </button> */}
        </div>
    )
}

export default AppFilter;