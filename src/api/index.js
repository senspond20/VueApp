
function jsonToQueryString(json){
    if(!json) return '';
    return '?' +
        Object.keys(json).map(function(key){
            if(json[key] instanceof Array){
                let query = [];
                for(let i =0; i< json[key].length; i++){
                    query.push(encodeURIComponent(key) + "=" + encodeURIComponent(json[key][i]));
                }
                return query.json('&');
            }else{
                return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
            }
        }).join('&');
}