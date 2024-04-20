interface TestFC {
    name : string,
    age: number
}
const TestReactFC : React.FC<TestFC> = ({name, age})=> {
    return (
        <>
        <h4>ReactFC 컴포넌트입니당</h4>
        <p>안녕하세요 저는 {name} 이고 {age} 살 입니당 </p>
        </>
    )
}
TestReactFC.displayName = "HELLOOOOO"
TestReactFC.defaultProps = {
    name:"weenddyyy"
}
export default TestReactFC