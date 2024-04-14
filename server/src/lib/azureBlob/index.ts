import { BlobServiceClient } from '@azure/storage-blob';
import dotenv from 'dotenv';

dotenv.config();

export const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING || '');

export const createContainers = async (): Promise<boolean> => {
  try {
    const containerClient = blobServiceClient.getContainerClient('public');
    await containerClient.createIfNotExists({
      access: 'blob',
    });
    return true;
  } catch (err) {
    throw new Error(`Error creating containers: ${err}`);
  }
};

export const uploadBlobFromReadBuffer = async (path: string, file: Buffer): Promise<string> => {
  try {
    const containerClient = blobServiceClient.getContainerClient('public');
    const blockBlobClient = containerClient.getBlockBlobClient(`${path}`);
    await blockBlobClient.uploadData(file);
    return blockBlobClient.url;
  } catch (err) {
    throw new Error(`Error saving file: ${err}`);
  }
};

export const deleteBlob = async (path: string): Promise<boolean> => {
  try {
    const containerClient = blobServiceClient.getContainerClient('public');
    const blockBlobClient = containerClient.getBlockBlobClient(`${path}`);
    await blockBlobClient.delete();
    return true;
  } catch (err) {
    throw new Error(`Error deleting file: ${err}`);
  }
};
