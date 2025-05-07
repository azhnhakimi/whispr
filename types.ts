// types.ts

import { NavigatorScreenParams } from "@react-navigation/native";

// Define bottom tab routes
export type BottomTabParamList = {
	Home: undefined;
	Folders: undefined;
	Labels: undefined;
	Search: undefined;
};

// Define stack routes
export type RootStackParamList = {
	BottomTabs: NavigatorScreenParams<BottomTabParamList>;
	NoteEditorScreen: undefined; // not in bottom tabs
};
