const ROOT = `https://reqres.in/api`;
const main = document.getElementById('datas');
let requestId = true;             

function getUserList(){             
    if (!requestId) return; 

    const butt = event.target;
    const div = document.createElement('div');
    const url = `${ROOT}/users?page=${butt.value}`;
    div.id = `div${butt.value}`;
    const elem = document.getElementById(`div${butt.value}`)
       
    
    if (elem === null && requestId){
        requestId = false
        fetch(url)
        .then(data => data.json())
        .then(data =>
            {                   
                const users = data.data;
                const usersList = users.map(function(user){
                    return `${user.first_name} ${user.last_name}`
                    });
                div.innerHTML = usersList    
                main.appendChild(div);
                requestId = true       
            }
        )
        

    } else if (elem !== null) {
        elem.classList.add('done');
        setTimeout(function(){
            elem.classList.remove('done');
        }, 1000);
    };
};

function hideIt(){
    const butt = event.target;
    const elem = document.getElementById(`div${butt.value}`);
    if (elem !== null) elem.remove();
}

buttons.addEventListener("dblclick", hideIt);
buttons.addEventListener("click", getUserList);




