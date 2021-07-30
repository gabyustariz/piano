import Key from "./Key";
import "../css/piano.css";
import { Do, Re, Mi, Fa, Sol, La, Si, DoM, ReM, FaM, SolM, LaM} from "./Notes";

const Piano = () => {
    const Notes: string[] = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j'];
    const Sounds: any = {'a': Do, 'w': DoM, 's': Re, 'e': ReM, 'd': Mi, 'f': Fa, 't': FaM, 'g': Sol, 'y': SolM, 'h': La, 'u': LaM, 'j': Si};
    let id: number = 0;
    return ( 
        <div className="container">
            <h1>Piano App!</h1>
            <div className="keyword">
                {Notes.map((note: string) => (
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