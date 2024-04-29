export function validateSize(files: FileList) {
    for (let i = 0; i < files.length; i++) {
        if (files[i].size > 10000000) {
            return false;
        }
    }
    return true;

  }