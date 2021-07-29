import Key from "./Key";
import "../scss/piano.css";
import { Do, Re, Mi, Fa, Sol, La, Si } from "./Notes";

const Piano = () => {
    const Notes = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j'];
    const Sounds = {'a': Do, 'w': Re, 's': Re, 'e': Fa, 'd': Mi, 'f': Fa, 't': Si, 'g': Sol, 'y': Si, 'h': La, 'u': Si, 'j': Si};
    let id = 0;
    return (
        <div className="container">
            <h1>Piano App!</h1>
            <div className="keyword">
                {Notes.map(note => (
                    <Key 
                    note={note} 
                    id={id++}
                    sound={Sounds[note]}
                    />
                ))}
            </div>
        </div>
        
    );
}
 
export default Piano;