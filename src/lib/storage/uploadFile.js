export async function uploadFile(file) {
  return {
    key: `uploads/${Date.now()}-${file?.name || "mock-file"}`,
    url: "https://storage.example.com/mock-file",
    size: file?.size || 0
  };
}
