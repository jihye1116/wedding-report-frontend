import { http, HttpResponse } from "msw";
import fortest from "../../mocks/fortest.json";

export const handlers = [
  http.get("/api/report/:resultId", ({ params }) => {
    const { resultId } = params;
    console.log("MSW intercepted request for resultId:", resultId);
    return HttpResponse.json(fortest);
  }),
];