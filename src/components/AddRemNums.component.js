const AddRemNums = (props) => {

    const { amount, handleAmount, addRemove, setAddRemove } = props;

    const handleAdd = () => {
        if (addRemove !== "add") {
            setAddRemove("add");
        }
    }

    const handleRemove = () => {
        if (addRemove !== "remove") {
            setAddRemove("remove");
        }
    }

    const handleDollar = (change) => {
        if (addRemove === "add") {
            handleAmount(parseInt(amount)+change);
        } else {
            handleAmount(parseInt(amount)-change);
        }
    }

    return (
        <div>
            <button onClick={handleAdd}>+ {addRemove === "add" ? "(selected)" : null}</button>
            <button onClick={handleRemove}>- {addRemove === "remove" ? "(selected)" : null}</button>
            <button onClick={() => handleDollar(1)}>$1</button>
            <button onClick={() => handleDollar(5)}>$5</button>
            <button onClick={() => handleDollar(25)}>$25</button>
            <button onClick={() => handleDollar(100)}>$100</button>
        </div>
    )
};

export default AddRemNums;