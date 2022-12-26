import SampleContext from "../contexts/SampleContext";

type Props = { children: any };

function SampleProvider(props: Props) {
    function sampleFunction() {
        // ...
    }

    return (
        <SampleContext.Provider value={{ sampleFunction }}>
            {props.children}
        </SampleContext.Provider>
    );
}
