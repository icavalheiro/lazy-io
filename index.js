function TextFile(filePath){
    const fs = require('fs')
    const file = fs.readFileSync(filePath, 'utf8')
    var pointer = 0;

    function eof(){
        return (pointer >= file.length);
    }

    function ReadAllText(){
        return file;
    }

    function ReadLine(){
        var cache = "";
        while(!eof()){
            var char = Read(1);
            if(char != '\n' && char != '\r'){
                cache += char;
            } else {
                if(char == '\r'){
                    var nextChar = Read(1);
                    if(nextChar != '\n'){
                        SetPointer(GetPointer() - 1);
                    }
                }
                return cache;
            }
        }

        return cache;
    }

    function Read(characters){
        var cache = "";
        
        for(var i = 0; i < characters, !eof(); i++){
            cache += file[pointer];
            pointer ++;
        }

        return cache;
    }

    function SetPointer(newPointer){
        pointer = newPointer;
    }

    function GetPointer(){
        return pointer;
    }

    this.eof = eof;
    this.ReadAllText = ReadAllText;
    this.ReadLine = ReadLine;
    this.Read = Read;
    this.SetPointer = SetPointer;
    this.GetPointer = GetPointer;
}

module.exports.TextFile = TextFile;