const urlParams = new URLSearchParams(window.location.search);
const CodeLength = urlParams.get('codes');
let AllCodes = [];

document.getElementById('generate').addEventListener('click', () =>{
    for(let i = 0; i <= CodeLength; i++)
    {
        const code = "[MobGen] "+"http://discord.gift/"+ GenerateRandomString(16) + '\n';
        console.log(code);
        AllCodes += code;
        if(i >= CodeLength)
        {
            document.getElementById('CodesInp').value = AllCodes;
            document.getElementById('CodesInp').select();
            document.execCommand('copy');
            window.location.href = CreateFile(AllCodes);
        }
    }
});

const GenerateRandomString = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
   }
   return result;
}

const CreateFile = (text) => {
    var textFile = null;
    var data = new Blob([text], {type: 'text/plain'}); 
    if (textFile !== null) {  
      window.URL.revokeObjectURL(textFile);  
    }
    textFile = window.URL.createObjectURL(data);  
    return textFile; 
}