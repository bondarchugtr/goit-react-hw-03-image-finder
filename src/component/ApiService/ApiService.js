import React from "react";

const BASE_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=`;
const BASE_KEY = `23937697-9e9e797303b592bb126e18e87`;

export default function Api(imgName, page) {
  const url = BASE_URL + `${imgName}&page=${page}&per_page=12&key=${BASE_KEY}`;
  return fetch(url).then((response) => response.json());
}
