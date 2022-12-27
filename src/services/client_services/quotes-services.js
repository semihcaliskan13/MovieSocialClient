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
        return http.post("/Quotes/PostQuotes", data, {

        });
    }
}

export default new QuotesServices();
