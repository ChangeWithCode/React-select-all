const List = ({ selectedOption }) => {
    return (

        <>
            {selectedOption?.map((obj) => {
                return <h1>{obj.value}</h1>
            })}

        </>

    );
}

export default List;