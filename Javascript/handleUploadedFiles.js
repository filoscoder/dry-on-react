// Parameter> $files: Array<{}>
// Output> Array<{preview: string, formattedSize: float}>
export const handleUploadedFiles = (files = []) => {
  if (!Array.isArray(files)) return [];
  return files.map((file) =>
    Object.assign(file, {
      preview: URL.createObjectURL(file),
      formattedSize: formatBytes(file.size),
    })
  );
};

const formatBytes = (bytes = 0, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
