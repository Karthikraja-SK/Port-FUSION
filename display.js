
function color(a){
    document.getElementById("name").style.color=`${a}`
    document.getElementById("role").style.color=`${a}`
    document.getElementById("objective").style.color=`${a}`
    document.getElementById("download").style.backgroundColor=`${a}`
    document.getElementById("emailid").style.color=`${a}`
    document.getElementById("number").style.color=`${a}`
    document.getElementById("add").style.color=`${a}`
    document.getElementById("link").style.color=`${a}`
    document.getElementById("edu").style.color=`${a}`
    document.getElementById("pro").style.color=`${a}`
    document.getElementById("cour").style.color=`${a}`
    document.getElementById("techinical").style.color=`${a}`
    document.getElementById("hobby").style.color=`${a}`
    document.getElementById("addpr").style.color=`${a}`
    document.getElementById("sn").style.color=`${a}`
    document.getElementById("sm").style.color=`${a}`
    document.getElementById("rm").style.color=`${a}`
    document.getElementById("sub").style.color=`${a}`
    document.getElementById("msg").style.color=`${a}`
    
    document.getElementById("Download").style.backgroundColor=`${a}`
    
    //document.getElementById("hobby").style.color=`${a}`
}
document.addEventListener('DOMContentLoaded', async function() {
    let portfolioData = JSON.parse(localStorage.getItem('portfolioData'));
    document.getElementById('name').textContent = portfolioData.name;
    document.getElementById('email').textContent = portfolioData.email;
    document.getElementById('role').textContent = portfolioData.role;
    document.getElementById('address').textContent = portfolioData.address;
    document.getElementById('contact').textContent = portfolioData.contact;
    document.getElementById('objective').textContent = portfolioData.objective;
    let url=portfolioData.cv
    document.getElementById("download").innerHTML=`<a href="${url}" class="btn" id="download">Download CV</a>`
    let linked=portfolioData.linkedin
    document.getElementById("linked").innerHTML=`<a href="${linked}" style="text-decoration: none; color: white;"><span >Click to View Profile</span></a>`
    // console.log(url);

    let img=portfolioData.image
    document.getElementById("imageid").innerHTML=`<img src="${img}" alt="" id="imageid">`
    // console.log(img);
    
    let educationlist=document.getElementById('education');
    portfolioData.education.forEach(education => {
        let li = document.createElement('li');
        li.textContent = education;
        educationlist.appendChild(li);
    });
    let skillsList = document.getElementById('skills');
    portfolioData.skills.forEach(skill => {
        let li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });
    // document.getElementById('projects').textContent = portfolioData.projects;
    let projectlist = document.getElementById('projects');
    portfolioData.projects.forEach(projects => {
        let li = document.createElement('li');
        li.textContent = projects;
        projectlist.appendChild(li);
    });

    let coursesList = document.getElementById('courses');
    portfolioData.courses.forEach(course => {
        let li = document.createElement('li');
        li.textContent = course;
        coursesList.appendChild(li);
    });
    let Addpri = document.getElementById('addpri');
    portfolioData.addpri.forEach(addpri => {
        let li = document.createElement('li');
        li.textContent = addpri;
        Addpri.appendChild(li);
    });
    let hobbiesList = document.getElementById('hobbies');
    portfolioData.hobbies.forEach(hobby => {
        let li = document.createElement('li');
        li.textContent = hobby;
        hobbiesList.appendChild(li);
    });
    await new Promise(resolve => setTimeout(resolve, 1000));
    window.alert("You can customize the color by using right-side color options \n And You can download the portfolio also");
});
function sendMail(){
            (function(){
                emailjs.init("cTTtAyu2CxJ0Xen3w");
        })();
        var params={
            sendername:document.querySelector("#sendername").value,
            to:document.querySelector("#to").value,
            subject:document.querySelector("#subject").value,
            senderemail:document.querySelector("#senderemail").value,
            message:document.querySelector("#message").value

        };
        var serviceID="service_0ihan5f";
        var templateID="template_pesg8gc";
        emailjs.send(serviceID,templateID,params)
        .then(res=>
        {alert("Email send success");
        
        })
        .catch();        
}
window.onload=function(){
    // console.log('hai')
    document.getElementById("Download").addEventListener("click",()=>{
        var invoice=document.getElementById("down");
        console.log(invoice);
        console.log(window);
        var options= {
            margin: 0,
            filename:`portfolio.pdf`,
            image:{type :'png',quality:0.5},
            html2canvas:{scale:4},
            jsPDF :{unit:'mm',format:'A3',orientation:'landscape'}
        };
        html2pdf().from(invoice).set(options).save();
    })
}
