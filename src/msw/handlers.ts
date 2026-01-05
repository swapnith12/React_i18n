import { http, HttpResponse } from "msw";
import type {  Jobs } from "../lib/types";
import * as driver from "../mocks/driver.json";
import * as plumber from "../mocks/plumber.json";
import * as mechanic from "../mocks/mechanic.json";

export const handlers = [
  http.get<never, never, Jobs>("/api/Driver/jobs", () => {
    return HttpResponse.json<Jobs>(driver);
  }),
  http.get<never, never, Jobs>("/api/Plumber/jobs", () => {
    return HttpResponse.json<Jobs>(plumber);
  }),
  http.get<never, never, Jobs>("/api/Mechanic/jobs", () => {
    return HttpResponse.json<Jobs>(mechanic);
  }),

  http.post<never, never, Jobs>("/api/driver/jobs", () => {
    const appliedJobJson = driver.map((each) => ({
      ...each,
      applied: true,
    }));

    return HttpResponse.json<Jobs>(appliedJobJson);
  }),
];
