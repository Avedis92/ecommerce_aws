import { IRequestData, IHeaderOptions } from "../types";

const createSearchParamsString = (paramsObject: Record<string, string>) => {
  const searchParams = new URLSearchParams();

  for (const key in paramsObject) {
    // eslint-disable-next-line no-prototype-builtins
    if (paramsObject.hasOwnProperty(key)) {
      searchParams.append(key, paramsObject[key]);
    }
  }
  return searchParams.toString();
};

export const processUrl = (requestData: IRequestData) => {
  const baseUrl = import.meta.env["VITE_AWS_API_GATEWAY_BASE_URL"];
  const endpoint = requestData.endpoints;
  const path = requestData.path || "";
  const searchParams = requestData.params
    ? `?${createSearchParamsString(requestData.params)}`
    : "";
  return `${baseUrl}${endpoint}${path}${searchParams}`;
};

const addHeaders = (
  headersOptions?: IHeaderOptions
): Pick<IRequestData, "headers"> => {
  if (!headersOptions || !headersOptions?.Authorization) {
    return {
      headers: {
        "Content-type": "application/json",
      },
    };
  }
  return {
    headers: {
      "Content-type": headersOptions?.accept || "application/json",
      Authorization: headersOptions?.Authorization,
    },
  };
};

type IProcessOptions = Pick<IRequestData, "headers" | "method" | "body">;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const processOptions = (requestData: IRequestData): any => {
  const options = {
    method: requestData.method || "GET",
    ...addHeaders(requestData.headers),
    mode: "cors",
  };
  if (requestData.body) {
    (options as IProcessOptions).body = requestData.body;
  }
  return options;
};
