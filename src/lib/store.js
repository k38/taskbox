
/* A simple redux store/actions/reducer implementation.
 * A true app would be more complex and separated into different files.
  * シンプルな redux ストア/アクション/リデューサー実装。
  * 実際のアプリはより複雑になり、異なるファイルに分割されます。
 */
import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';

/*
 * The initial state of our store when the app loads.
 * Usually, you would fetch this from a server. Let's not worry about that now
 * アプリがロードされたときのストアの初期状態。
 * 通常はサーバーから取得します。今は気にしないでください
 */

const TaskBoxData = {
  tasks: [],
  status: 'idle',
  error: null,
};

/*
 * Creates an asyncThunk to fetch tasks from a remote endpoint.
 * You can read more about Redux Toolkit's thunks in the docs:
 * https://redux-toolkit.js.org/api/createAsyncThunk
 * リモート エンドポイントからタスクを取得するための asyncThunk を作成します。
 * Redux Toolkit の thunk の詳細については、次のドキュメントを参照してください。
 */
export const fetchTasks = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?userId=1'
  );
  const data = await response.json();
  const result = data.map((task) => ({
    id: `${task.id}`,
    title: task.title,
    state: task.completed ? 'TASK_ARCHIVED' : 'TASK_INBOX',
  }));
  return result;
});

/*
 * The store is created here.
 * You can read more about Redux Toolkit's slices in the docs:
 * https://redux-toolkit.js.org/api/createSlice
 * ストアはここで作成されます。
 * Redux Toolkit のスライスの詳細については、次のドキュメントを参照してください。
 */
const TasksSlice = createSlice({
  name: 'taskbox',
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload;
      const task = state.tasks.findIndex((task) => task.id === id);
      if (task >= 0) {
        state.tasks[task].state = newTaskState;
      }
    },
  },
  /*
   * Extends the reducer for the async actions
   * You can read more about it at https://redux-toolkit.js.org/api/createAsyncThunk
   * 非同期アクションのリデューサーを拡張します
   * 詳細については、
   */
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.tasks = [];
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        // Add any fetched tasks to the array
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = 'failed';
        state.error = "Something went wrong";
        state.tasks = [];
      });
  },
});

// The actions contained in the slice are exported for usage in our components
// スライスに含まれるアクションは、コンポーネントで使用するためにエクスポートされます。
export const { updateTaskState } = TasksSlice.actions;

/*
 * Our app's store configuration goes here.
 * Read more about Redux's configureStore in the docs:
 * https://redux-toolkit.js.org/api/configureStore
 * アプリのストア設定はここに記述します。
 * Redux の configureStore の詳細については、ドキュメントをご覧ください。
 */
const store = configureStore({
  reducer: {
    taskbox: TasksSlice.reducer,
  },
});

export default store;