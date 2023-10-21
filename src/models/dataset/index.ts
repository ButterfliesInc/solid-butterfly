// taken from Inrupt 
import {
  createSolidDataset,
  getSolidDataset,
  saveSolidDatasetAt,
} from "@inrupt/solid-client";
import { ERROR_CODES, isHTTPError } from "../errors";
import {chain} from "../helpers";



/*
* Datasets refer to SolidDataset from @inrupt/solid-client.
* This module adds some extra custom, handy functions.
*/

/* Model functions */
export async function getOrCreateDataset(url, fetch) {
  try {
      return await getSolidDataset(url, { fetch });
  } catch (error) {
      if (isHTTPError(error, ERROR_CODES.NOT_FOUND)) return createSolidDataset();
      throw error;
  }
}

export async function updateOrCreateDataset(url, fetch, ...operations) {
  const dataset = await getOrCreateDataset(url, fetch);
  return saveSolidDatasetAt(url, chain(dataset, ...operations), { fetch });
}
