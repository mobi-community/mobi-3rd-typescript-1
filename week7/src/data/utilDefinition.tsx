import AsConst from "../utilType/asConst";
import Enum from "../utilType/enum";
import Record from "../utilType/record";

interface Arrangement {
    id: number;
    title: string;
    content: string;
    component: React.ReactElement;
}

export const UtilDefinition: Array<Arrangement> = [
    {
        id: 1,
        title: "Enum",
        content: ` TypeScript에서 'enum'(열거형)은 특정 값들의 집합을 명명된 상수로 정의할 때 사용된다
            코드의 가독성과 유지보수성을 높일 수 있다`,
        component: <Enum />,
    },
    {
        id: 2,
        title: "As const",
        content: `
        TypeScript에서 'as const'는 특정 값들이나 객체의 프로퍼티가 변하지 않도록
        "상수"로 표시하는 방법이다.
        해당 값들을 리터럴 타입으로 추론하며, 이러한 리터럴 타입은 더욱 구체적이고 제한적인 타입을 가진다
        컴파일러가 더 엄격한 타입 검사를 수행하도록 할 수 있다.
        `,
        component: <AsConst />,
    },
    {
        id: 3,
        title: "Record",
        content: `
        
        `,
        component: <Record />,
    },
];
