import urls from '../../urls';

export const getPostList = () =>
    fetch(urls.getAllPost).
        then(response => response.json()).
        catch(error => console.log(error));

        export const getPostById= (id) =>
        
        fetch(`${urls.getAllPost}/${id}`).
        then(response=> response.json()).
        catch(error=>console.log(error));
