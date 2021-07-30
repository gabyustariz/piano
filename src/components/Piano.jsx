import Key from "./Key";
import "../css/piano.css";
import { Do, Re, Mi, Fa, Sol, La, Si, DoM, ReM, FaM, SolM, LaM}from "./Notes";

const Piano = () => {
    const Notes = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j'];
    const Sounds = {'a': Do, 'w': DoM, 's': Re, 'e': ReM, 'd': Mi, 'f': Fa, 't': FaM, 'g': Sol, 'y': SolM, 'h': La, 'u': LaM, 'j': Si};
    let id = 0;
    return (
        <div className="container">
            <h1>Piano App!</h1>
            <div className="keyword">
                {Notes.map(note => (
                    <Key 
                    key={id++}
                    note={note}
                    id={`Key${id}`}
                    sound={Sounds[note]}
                    />
                ))}
            </div>
        </div>
        
    );
}
 
export default Piano;