// const vacancy = {
//     title: 'Web designer & developer',
//     company : 'BSW Group',
//     location : 'Manchester',
//     features : {
//         salary : ' £28,000 - £34,000 a year',
//         type : 'full time ',
//         shift: '8 hours'
//     },
//     desc : {
//         desc_1:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ut repellendus perspiciatis suscipit ipsa, quasi iste quidem consectetur tempore, nemo.',
//         desc_2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, ipsam.'
//     }
    
// }

// const vacancy2 = {
//     title: 'Cleaner',
//     company : 'Mitie',
//     location : 'Leeds',
//     features : {
//         salary : ' £20,000 - £24,000 a year',
//         type : 'full time ',
//         shift: '8 hours'
//     },
//     desc : {
//         desc_1:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ut repellendus perspiciatis suscipit ipsa, quasi iste quidem consectetur tempore, nemo.',
//         desc_2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, ipsam.'
//     }
    
// }
// const vacancy3 = {
//     title: 'Football scout',
//     company : 'Arsenal FC',
//     location : 'North London',
//     features : {
//         salary : ' £200,000 - £240,000 a year',
//         type : 'full time ',
//         shift: '8 hours'
//     },
//     desc : {
//         desc_1:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ut repellendus perspiciatis suscipit ipsa, quasi iste quidem consectetur tempore, nemo.',
//         desc_2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, ipsam.'
//     }
    
// }

// const feed = document.getElementById('job-feed');



// window.addEventListener('load', function(){
//     createJobCard(vacancy.title, vacancy.company, vacancy.location, vacancy.features.salary, vacancy.features.type, vacancy.features.shift, vacancy.desc.desc_1, vacancy.desc.desc_2 );
    
//     createJobCard(vacancy2.title, vacancy2.company, vacancy2.location, vacancy2.features.salary, vacancy2.features.type, vacancy2.features.shift, vacancy2.desc.desc_1, vacancy2.desc.desc_2 );
    
//      createJobCard(vacancy3.title, vacancy3.company, vacancy3.location, vacancy3.features.salary, vacancy3.features.type, vacancy3.features.shift, vacancy3.desc.desc_1, vacancy3.desc.desc_2 );
    
    
// })  





// function createJobCard (title, company, location, salary, type, shift, desc_1, desc_2){
    
//     var jobCard = `<a href="job.html"><div class="job-card">
//                         <h3>${title}</h3>
//                         <p class="job-company">${company}</p>
//                         <p class="job-location">${location}</p>
//                         <ul class="job-features">
//                             <li>${salary}</li>
//                             <li>${type}</li>
//                             <li>${shift}</li>
//                         </ul>
//                         <ul class="job-desc">
//                             <li>${desc_1}</li>
//                             <li>${desc_2}</li>
//                         </ul>
//                     </div></a>`;
//     feed.innerHTML += jobCard;
//     return jobCard;
// }



