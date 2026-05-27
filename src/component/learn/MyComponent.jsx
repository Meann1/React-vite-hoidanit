import './style.css'

export const MyComponent = () => {
    // const hoidanit = [1, 2, 3];  // 123
    const hoidanit = {
        name: "hoidanit",
        age: 25,
    }
    return (
        <>
        
            <div>eric & {JSON.stringify(hoidanit)} update</div>
            <div className={"child"} style={{borderRadius: "10px"}}>
                Child
            </div>
        </>
    );
}
