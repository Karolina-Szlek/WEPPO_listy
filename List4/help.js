const readline = require('readline');
const fs = require('fs');

//The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.

function frequently(array) {
    let modeMap = {};//słownik 
    let maxEl = array[0], maxCount = 1;
    let maxEl2 = array[1], maxCount2 = 1;
    let maxEl3 = array[2], maxCount3 = 1;
    
    for(let i = 0; i < array.length; i++) {//lecimy po wszystkich elem
        let el = array[i];
        
        if(modeMap[el] == null)//jak nie było jeszcze tego elem to ilość wystąpień na 1
            modeMap[el] = 1;
        else
            modeMap[el]++;  //zwiększ ilość wystąpień
        
        if(modeMap[el] > maxCount) {
            maxEl3 = maxEl2;
            maxCount3 = maxCount2 ;//max elem i max count słowo z najw liczbą wystąpień
            maxEl2 = maxEl;
            maxCount = maxCount;//max elem i max count słowo z najw liczbą wystąpień
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    
    return maxEl2;
}
//z listy num usówa val
function removeElement(nums, val) {
    for (let i=nums.length - 1; i >=0; i--) {//lecimy z i od przedostatmiego
        if (nums[i] == val) {//jeśli elem jest równy val
            nums.splice(i,1);//usuń go
        }
    }
};

function main() {
    const rl = readline.createInterface({
    input: fs.createReadStream('logi_servera.txt'),
    });//readline 

//Emitted whenever the in stream receives a \n, 
//usually received when the user hits enter, or return. This is a good hook to listen for user input.

    let listOfHosts = []
    rl.on('line', (line) => {
        let str = line.split(" ")[0]
        listOfHosts.push(str)
    });
    rl.on('close', () => {//kończy czytanie ?
        mostStr = frequently(listOfHosts)
        console.log( "1st most frequent is : " +mostStr)
        //console.log( "2nd most frequent is : " +mostStr[1])
        //console.log( "3rd most frequent is : " +mostStr[2])
        }
    )
}
main()