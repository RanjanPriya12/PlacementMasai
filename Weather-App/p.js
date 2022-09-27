
let str="priya";
let n=str.length;
str=str.split("");

function reverseString(str,n){
    let i=0,j=n-1;

    while(i!=j){
        if(str[i]=='a' || str[i]=='e' || str[i]=='o' || str[i]=='i' || str[i]=='u'){
            i++;
        }else{
            if(str[j]=='a' || str[j]=='e' || str[j]=='o' || str[j]=='i' || str[j]=='u'){
                j--;
            }else{
                let temp=str[i];
                str[i]=str[j];
                str[j]=temp;
            }
        }
    }
    console.log(str.join(""));
}
reverseString(str,n)



























// console.log("satrt");

// function importantAction(value,cb){
//     setTimeout(()=>{
//         cb(`subscribe to ${value}`);
//     },500);
// }

// function likeTheVideo(video,cb){
//     setTimeout(()=>{
//         cb(`Like the ${video} video`);
//     },1000);
// }

// function shareTheVideo(video,cb){
//     setTimeout(()=>{
//         cb(`Share the ${video}`);
//     },1000);
// }

// const message=importantAction('RoadSideCoder channel', function(message){
//     console.log(message);
//     likeTheVideo("javaScript interview", (action)=>{
//         console.log(action);
//         shareTheVideo('javaScript interview questions', (action)=>{
//             console.log(action);
//         });
//     });
// });

// console.log('end');