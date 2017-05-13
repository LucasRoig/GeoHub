function CSVtoArray(text) {
    var re_valid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
    var re_value = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
    // Return NULL if input string is not well formed CSV string.
    if (!re_valid.test(text)) return null;
    var a = [];                     // Initialize array to receive values.
    text.replace(re_value, // "Walk" the string using replace with callback.
        function(m0, m1, m2, m3) {
            // Remove backslash from \' in single quoted values.
            if      (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));
            // Remove backslash from \" in double quoted values.
            else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
            else if (m3 !== undefined) a.push(m3);
            return ''; // Return empty string.
        });
    // Handle special case of empty last value.
    if (/,\s*$/.test(text)) a.push('');
    return a;
};

export default{
    parse:function(text){
        //Separation en plusieurs lignes
        let lines = text.split(/\r?\n/);
        console.log("lignes :" + lines.length)
        let tab = []
        for (var i = 0; i<lines.length; i++){
            tab[i] = CSVtoArray(lines[i]);
            console.log("ligne " + i)
        }
        //console.log(tab)
        let variable = []
        //La premiere Ligne contient le nom des Variables
        for(var i = 1; i < tab[0].length; i++){
            variable[i] = {nom:tab[0][i],donnees:[]}
        }
        //La deuxieme ligne contient le code des Variables
        for(var i = 1; i < tab[1].length; i++){
            variable[i].codeVar = tab[1][i]
        }
        //Chaque autre ligne contient les donnees pour un code geo
        for(var lig = 2; lig < tab.length;lig++){
            //La premiere colonne est le codeGeo
            let codeGeo = tab[lig][0];
            for(var col = 1; col < tab[lig].length; col++){
                variable[col].donnees.push({codeGeo:codeGeo,valeur:tab[lig][col]})
            }
            console.log("var " + lig)
        }
        //Le premier element est null
        variable.splice(0,1);
        console.log(variable);
        return variable;
        //console.log(CSVtoArray(text));
    }
}