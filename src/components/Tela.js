function Tela({valor}){
    return(
        <>
            <input type="text" name="tela" id="tela" value={valor} disabled="disable"/>
        </>
    );
}

export default Tela;