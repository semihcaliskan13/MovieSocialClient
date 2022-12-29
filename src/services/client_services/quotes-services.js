import http from "../http-common";

class QuotesServices {


    getQuotes() {

        return http.get("/Quotes", {
            headers: {
                // "Content-type": "application/json",
            }

        });
    }

    getQuoteById(id) {
        return http.get(`/Quotes/${id}`,
            {

            });
    }

    getQuotesByUserId(userId) {

        return http.get(`/Quotes/GetQuotesByUserId/${userId}`,
            {

            });
    }
    getQuotesByMovieId(movieId) {

        return http.get(`/Quotes/GetQuotesByMovieId/${movieId}`,
            {

            });
    }

    postQuote(data) {
        return http.post("/Quotes", data, {

        });
    }
    postQuoteImage(userName,quoteId,file){

        let formData = new FormData();

        formData.append("file", file);

        return http.post(`/Quotes/PostQuotesImage/${userName}?quoteId=${quoteId}`,formData,{
            headers: {
                "Content-Type": "multipart/form-data",
              },
        })
    }
}

export default new QuotesServices();
