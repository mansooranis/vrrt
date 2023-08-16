import { createAsyncThunk } from "@reduxjs/toolkit";

// sample thunk, can be export and used anywhere
// ideally use in components' useEffect
const sampleThunks = createAsyncThunk((arg, thunkAPI) => {});

// export thunk
export { sampleThunks };