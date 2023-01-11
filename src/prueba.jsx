import * as React from "react";
import Moveable from "react-moveable";




export default function Prueba() {
   
   

    const [target, setTarget] = React.useState();
    const [frame, setFrame] = React.useState({
        translate: [0,0],
        scale: [1,1],
    });
    React.useEffect(() => {
        setTarget(document.querySelector(".target"));
    }, []);
    return <div className="container">
        <div className="target">Target</div>
        
        <Moveable
            target={target}
            resizable={frame.translate}
           // scalable={frame.scale}
            keepRatio={false}
            throttleResize={1}
            renderDirections={["nw","n","ne","w","e","sw","s","se"]}
            edge={false}
            zoom={1}
            origin={true}
            padding={{"left":0,"top":0,"right":0,"bottom":0}}
            onResizeStart={e => {
                e.setOrigin(["%", "%"]);
                e.dragStart && e.dragStart.set(frame.translate);
            }}
            onResize={e => {
                const beforeTranslate = e.drag.beforeTranslate;
            
                frame.translate = beforeTranslate;
                e.target.style.width = `${e.width}px`;
                e.target.style.height = `${e.height}px`;
                e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
            }}
        />
    </div>;
}