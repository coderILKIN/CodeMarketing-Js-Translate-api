
const url = 'https://api.example.com/translate';

const data = {
    source_language: 'az',  
    target_language: 'en',  
    text: 'Salam dünya'     
};


fetch(url, {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify(data) 
})
.then(response => response.json()) 
.then(result => {
    console.log(result.translated_text); 
})
.catch(error => {
    console.error('Xəta baş verdi:', error);
});
