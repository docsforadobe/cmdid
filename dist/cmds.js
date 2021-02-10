var cmds = [
	{
		"id": 2,
		"menu": "File",
		"label": "New Project",
		"enum": "FILE_NEW_PROJECT"
	},
	{
		"id": 3,
		"menu": "File",
		"label": "Open Project...",
		"enum": "FILE_OPEN_PROJECT"
	},
	{
		"id": 4,
		"menu": "File",
		"label": "Close",
		"enum": "FILE_CLOSE"
	},
	{
		"id": 5,
		"menu": "File",
		"label": "Save",
		"enum": "FILE_SAVE"
	},
	{
		"id": 6,
		"menu": "File",
		"label": "Save As...",
		"enum": "FILE_SAVE_AS"
	},
	{
		"id": 7,
		"menu": "File",
		"label": "Revert",
		"enum": "FILE_REVERT"
	},
	{
		"id": 16,
		"menu": "Edit",
		"label": "Can’t Undo",
		"enum": "EDIT_CAN’T_UNDO"
	},
	{
		"id": 18,
		"menu": "Edit",
		"label": "Cut",
		"enum": "EDIT_CUT"
	},
	{
		"id": 19,
		"menu": "Edit",
		"label": "Copy",
		"enum": "EDIT_COPY"
	},
	{
		"id": 20,
		"menu": "Edit",
		"label": "Paste",
		"enum": "EDIT_PASTE"
	},
	{
		"id": 21,
		"menu": "Edit",
		"label": "Clear",
		"enum": "EDIT_CLEAR"
	},
	{
		"id": 23,
		"menu": "Edit",
		"label": "Select All",
		"enum": "EDIT_SELECT_ALL"
	},
	{
		"id": 53,
		"menu": "Edit",
		"label": "Copy Expression Only",
		"enum": "EDIT_COPY_EXPRESSION_ONLY"
	},
	{
		"id": 2000,
		"menu": "Composition",
		"label": "New Composition...",
		"enum": "COMP_NEW_COMPOSITION"
	},
	{
		"id": 2003,
		"menu": "File",
		"label": "File...",
		"enum": "FILE_FILE"
	},
	{
		"id": 2003,
		"menu": "File",
		"label": "File...",
		"enum": "FILE_FILE"
	},
	{
		"id": 2003,
		"menu": "File",
		"label": "File...",
		"enum": "FILE_FILE"
	},
	{
		"id": 2003,
		"menu": "Composition",
		"label": "File...",
		"enum": "COMP_FILE"
	},
	{
		"id": 2004,
		"menu": "Edit",
		"label": "Deselect All",
		"enum": "EDIT_DESELECT_ALL"
	},
	{
		"id": 2005,
		"menu": "File",
		"label": "Add Footage to Comp",
		"enum": "FILE_ADD_FOOTAGE_TO_COMP"
	},
	{
		"id": 2007,
		"menu": "Composition",
		"label": "Composition Settings...",
		"enum": "COMP_COMPOSITION_SETTINGS"
	},
	{
		"id": 2010,
		"menu": "Window",
		"label": "Tools",
		"enum": "WINDOW_TOOLS"
	},
	{
		"id": 2012,
		"menu": "Composition",
		"label": "Set Poster Time",
		"enum": "COMP_SET_POSTER_TIME"
	},
	{
		"id": 2016,
		"menu": "Layer",
		"label": "Bring to Front",
		"enum": "LAYER_BRING_TO_FRONT"
	},
	{
		"id": 2017,
		"menu": "Layer",
		"label": "Send to Back",
		"enum": "LAYER_SEND_TO_BACK"
	},
	{
		"id": 2018,
		"menu": "Layer",
		"label": "Bring Forward",
		"enum": "LAYER_BRING_FORWARD"
	},
	{
		"id": 2019,
		"menu": "Layer",
		"label": "Send Backward",
		"enum": "LAYER_SEND_BACKWARD"
	},
	{
		"id": 2020,
		"menu": "Layer",
		"label": "Transform",
		"enum": "LAYER_TRANSFORM"
	},
	{
		"id": 2020,
		"menu": "Effect",
		"label": "Transform",
		"enum": "EFFECT_TRANSFORM"
	},
	{
		"id": 2021,
		"menu": "Layer",
		"label": "Layer Settings...",
		"enum": "LAYER_LAYER_SETTINGS"
	},
	{
		"id": 2024,
		"menu": "Layer",
		"label": "Time Stretch...",
		"enum": "LAYER_TIME_STRETCH"
	},
	{
		"id": 2028,
		"menu": "Window",
		"label": "Info",
		"enum": "WINDOW_INFO"
	},
	{
		"id": 2035,
		"menu": "Edit",
		"label": "Can’t Redo",
		"enum": "EDIT_CAN’T_REDO"
	},
	{
		"id": 2037,
		"menu": "View",
		"label": "Resolution",
		"enum": "VIEW_RESOLUTION"
	},
	{
		"id": 2040,
		"menu": "Layer",
		"label": "Mask",
		"enum": "LAYER_MASK"
	},
	{
		"id": 2041,
		"menu": "Layer",
		"label": "Quality",
		"enum": "LAYER_QUALITY"
	},
	{
		"id": 2042,
		"menu": "Layer",
		"label": "Wireframe",
		"enum": "LAYER_WIREFRAME"
	},
	{
		"id": 2044,
		"menu": "Layer",
		"label": "Draft",
		"enum": "LAYER_DRAFT"
	},
	{
		"id": 2045,
		"menu": "Layer",
		"label": "Best",
		"enum": "LAYER_BEST"
	},
	{
		"id": 2046,
		"menu": "View",
		"label": "Quarter",
		"enum": "VIEW_QUARTER"
	},
	{
		"id": 2047,
		"menu": "View",
		"label": "Half",
		"enum": "VIEW_HALF"
	},
	{
		"id": 2048,
		"menu": "View",
		"label": "Full",
		"enum": "VIEW_FULL"
	},
	{
		"id": 2049,
		"menu": "View",
		"label": "Custom...",
		"enum": "VIEW_CUSTOM"
	},
	{
		"id": 2049,
		"menu": "View",
		"label": "Custom...",
		"enum": "VIEW_CUSTOM"
	},
	{
		"id": 2051,
		"menu": "Layer",
		"label": "Free Transform Points",
		"enum": "LAYER_FREE_TRANSFORM_POINTS"
	},
	{
		"id": 2052,
		"menu": "Layer",
		"label": "Inverted",
		"enum": "LAYER_INVERTED"
	},
	{
		"id": 2053,
		"menu": "Layer",
		"label": "Switches",
		"enum": "LAYER_SWITCHES"
	},
	{
		"id": 2054,
		"menu": "Layer",
		"label": "Hide Other Video",
		"enum": "LAYER_HIDE_OTHER_VIDEO"
	},
	{
		"id": 2055,
		"menu": "Layer",
		"label": "Show All Video",
		"enum": "LAYER_SHOW_ALL_VIDEO"
	},
	{
		"id": 2059,
		"menu": "Layer",
		"label": "Video",
		"enum": "LAYER_VIDEO"
	},
	{
		"id": 2062,
		"menu": "Layer",
		"label": "Effect",
		"enum": "LAYER_EFFECT"
	},
	{
		"id": 2065,
		"menu": "Layer",
		"label": "Position...",
		"enum": "LAYER_POSITION"
	},
	{
		"id": 2066,
		"menu": "Layer",
		"label": "Scale...",
		"enum": "LAYER_SCALE"
	},
	{
		"id": 2068,
		"menu": "Layer",
		"label": "Mask Shape...",
		"enum": "LAYER_MASK_SHAPE"
	},
	{
		"id": 2069,
		"menu": "Layer",
		"label": "Mask Feather...",
		"enum": "LAYER_MASK_FEATHER"
	},
	{
		"id": 2070,
		"menu": "Layer",
		"label": "Opacity...",
		"enum": "LAYER_OPACITY"
	},
	{
		"id": 2071,
		"menu": "Layer",
		"label": "Pre-compose...",
		"enum": "LAYER_PRE_COMPOSE"
	},
	{
		"id": 2072,
		"menu": "Effect",
		"label": "Remove All",
		"enum": "EFFECT_REMOVE_ALL"
	},
	{
		"id": 2076,
		"menu": "View",
		"label": "Go to Time...",
		"enum": "VIEW_GO_TO_TIME"
	},
	{
		"id": 2077,
		"menu": "File",
		"label": "Main...",
		"enum": "FILE_MAIN"
	},
	{
		"id": 2080,
		"menu": "Edit",
		"label": "Duplicate",
		"enum": "EDIT_DUPLICATE"
	},
	{
		"id": 2081,
		"menu": "View",
		"label": "Third",
		"enum": "VIEW_THIRD"
	},
	{
		"id": 2092,
		"menu": "View",
		"label": "Zoom In",
		"enum": "VIEW_ZOOM_IN"
	},
	{
		"id": 2093,
		"menu": "View",
		"label": "Zoom Out",
		"enum": "VIEW_ZOOM_OUT"
	},
	{
		"id": 2101,
		"menu": "Layer",
		"label": "^1...",
		"enum": "LAYER_^1"
	},
	{
		"id": 2102,
		"menu": "File",
		"label": "Interpret Footage",
		"enum": "FILE_INTERPRET_FOOTAGE"
	},
	{
		"id": 2103,
		"menu": "File",
		"label": "Proxy...",
		"enum": "FILE_PROXY"
	},
	{
		"id": 2105,
		"menu": "File",
		"label": "Import",
		"enum": "FILE_IMPORT"
	},
	{
		"id": 2106,
		"menu": "File",
		"label": "Set Proxy",
		"enum": "FILE_SET_PROXY"
	},
	{
		"id": 2107,
		"menu": "File",
		"label": "Consolidate All Footage",
		"enum": "FILE_CONSOLIDATE_ALL_FOOTAGE"
	},
	{
		"id": 2109,
		"menu": "File",
		"label": "Remove Unused Footage",
		"enum": "FILE_REMOVE_UNUSED_FOOTAGE"
	},
	{
		"id": 2113,
		"menu": "Layer",
		"label": "Shy",
		"enum": "LAYER_SHY"
	},
	{
		"id": 2114,
		"menu": "Layer",
		"label": "Lock",
		"enum": "LAYER_LOCK"
	},
	{
		"id": 2119,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2119,
		"menu": "Edit",
		"label": "None",
		"enum": "EDIT_NONE"
	},
	{
		"id": 2119,
		"menu": "Layer",
		"label": "None",
		"enum": "LAYER_NONE"
	},
	{
		"id": 2126,
		"menu": "File",
		"label": "Placeholder...",
		"enum": "FILE_PLACEHOLDER"
	},
	{
		"id": 2126,
		"menu": "File",
		"label": "Placeholder...",
		"enum": "FILE_PLACEHOLDER"
	},
	{
		"id": 2131,
		"menu": "Composition",
		"label": "Preview",
		"enum": "COMP_PREVIEW"
	},
	{
		"id": 2131,
		"menu": "Window",
		"label": "Preview",
		"enum": "WINDOW_PREVIEW"
	},
	{
		"id": 2135,
		"menu": "Layer",
		"label": "Time-Reverse Layer",
		"enum": "LAYER_TIME_REVERSE_LAYER"
	},
	{
		"id": 2139,
		"menu": "File",
		"label": "New Folder",
		"enum": "FILE_NEW_FOLDER"
	},
	{
		"id": 2142,
		"menu": "Edit",
		"label": "Edit Original...",
		"enum": "EDIT_EDIT_ORIGINAL"
	},
	{
		"id": 2149,
		"menu": "Edit",
		"label": "Render Settings...",
		"enum": "EDIT_RENDER_SETTINGS"
	},
	{
		"id": 2150,
		"menu": "Edit",
		"label": "Output Module...",
		"enum": "EDIT_OUTPUT_MODULE"
	},
	{
		"id": 2153,
		"menu": "Layer",
		"label": "Enable Time Remapping",
		"enum": "LAYER_ENABLE_TIME_REMAPPING"
	},
	{
		"id": 2154,
		"menu": "Composition",
		"label": "Add Output Module",
		"enum": "COMP_ADD_OUTPUT_MODULE"
	},
	{
		"id": 2156,
		"menu": "Layer",
		"label": "Fit to Comp",
		"enum": "LAYER_FIT_TO_COMP"
	},
	{
		"id": 2157,
		"menu": "Layer",
		"label": "Add Marker",
		"enum": "LAYER_ADD_MARKER"
	},
	{
		"id": 2158,
		"menu": "Edit",
		"label": "Split Layer",
		"enum": "EDIT_SPLIT_LAYER"
	},
	{
		"id": 2159,
		"menu": "Animation",
		"label": "Keyframe Assistant",
		"enum": "ANIM_KEYFRAME_ASSISTANT"
	},
	{
		"id": 2160,
		"menu": "Layer",
		"label": "Collapse",
		"enum": "LAYER_COLLAPSE"
	},
	{
		"id": 2161,
		"menu": "File",
		"label": "Add to Render Queue",
		"enum": "FILE_ADD_TO_RENDER_QUEUE"
	},
	{
		"id": 2161,
		"menu": "Composition",
		"label": "Add to Render Queue",
		"enum": "COMP_ADD_TO_RENDER_QUEUE"
	},
	{
		"id": 2162,
		"menu": "Layer",
		"label": "Blending Mode",
		"enum": "LAYER_BLENDING_MODE"
	},
	{
		"id": 2163,
		"menu": "Effect",
		"label": "Effect Controls",
		"enum": "EFFECT_EFFECT_CONTROLS"
	},
	{
		"id": 2165,
		"menu": "Layer",
		"label": "Auto-Orient...",
		"enum": "LAYER_AUTO_ORIENT"
	},
	{
		"id": 2166,
		"menu": "File",
		"label": "Save a Copy...",
		"enum": "FILE_SAVE_A_COPY"
	},
	{
		"id": 2167,
		"menu": "Layer",
		"label": "Normal",
		"enum": "LAYER_NORMAL"
	},
	{
		"id": 2168,
		"menu": "Layer",
		"label": "Dissolve",
		"enum": "LAYER_DISSOLVE"
	},
	{
		"id": 2169,
		"menu": "Layer",
		"label": "Dancing Dissolve",
		"enum": "LAYER_DANCING_DISSOLVE"
	},
	{
		"id": 2171,
		"menu": "Layer",
		"label": "Multiply",
		"enum": "LAYER_MULTIPLY"
	},
	{
		"id": 2172,
		"menu": "Layer",
		"label": "Screen",
		"enum": "LAYER_SCREEN"
	},
	{
		"id": 2173,
		"menu": "Layer",
		"label": "Overlay",
		"enum": "LAYER_OVERLAY"
	},
	{
		"id": 2174,
		"menu": "Layer",
		"label": "Soft Light",
		"enum": "LAYER_SOFT_LIGHT"
	},
	{
		"id": 2175,
		"menu": "Layer",
		"label": "Hard Light",
		"enum": "LAYER_HARD_LIGHT"
	},
	{
		"id": 2176,
		"menu": "Layer",
		"label": "Classic Color Dodge",
		"enum": "LAYER_CLASSIC_COLOR_DODGE"
	},
	{
		"id": 2177,
		"menu": "Layer",
		"label": "Classic Color Burn",
		"enum": "LAYER_CLASSIC_COLOR_BURN"
	},
	{
		"id": 2180,
		"menu": "Layer",
		"label": "Classic Difference",
		"enum": "LAYER_CLASSIC_DIFFERENCE"
	},
	{
		"id": 2181,
		"menu": "Layer",
		"label": "Exclusion",
		"enum": "LAYER_EXCLUSION"
	},
	{
		"id": 2182,
		"menu": "Layer",
		"label": "Hue",
		"enum": "LAYER_HUE"
	},
	{
		"id": 2182,
		"menu": "Animation",
		"label": "Hue",
		"enum": "ANIM_HUE"
	},
	{
		"id": 2182,
		"menu": "Animation",
		"label": "Hue",
		"enum": "ANIM_HUE"
	},
	{
		"id": 2183,
		"menu": "Layer",
		"label": "Saturation",
		"enum": "LAYER_SATURATION"
	},
	{
		"id": 2183,
		"menu": "Animation",
		"label": "Saturation",
		"enum": "ANIM_SATURATION"
	},
	{
		"id": 2183,
		"menu": "Animation",
		"label": "Saturation",
		"enum": "ANIM_SATURATION"
	},
	{
		"id": 2184,
		"menu": "Layer",
		"label": "Color",
		"enum": "LAYER_COLOR"
	},
	{
		"id": 2184,
		"menu": "Window",
		"label": "Color",
		"enum": "WINDOW_COLOR"
	},
	{
		"id": 2185,
		"menu": "Layer",
		"label": "Luminosity",
		"enum": "LAYER_LUMINOSITY"
	},
	{
		"id": 2186,
		"menu": "Layer",
		"label": "Stencil Alpha",
		"enum": "LAYER_STENCIL_ALPHA"
	},
	{
		"id": 2187,
		"menu": "Layer",
		"label": "Stencil Luma",
		"enum": "LAYER_STENCIL_LUMA"
	},
	{
		"id": 2188,
		"menu": "Layer",
		"label": "Silhouette Alpha",
		"enum": "LAYER_SILHOUETTE_ALPHA"
	},
	{
		"id": 2189,
		"menu": "Layer",
		"label": "Silhouette Luma",
		"enum": "LAYER_SILHOUETTE_LUMA"
	},
	{
		"id": 2190,
		"menu": "Layer",
		"label": "Preserve Transparency",
		"enum": "LAYER_PRESERVE_TRANSPARENCY"
	},
	{
		"id": 2191,
		"menu": "Layer",
		"label": "No Track Matte",
		"enum": "LAYER_NO_TRACK_MATTE"
	},
	{
		"id": 2192,
		"menu": "Layer",
		"label": "Alpha Matte",
		"enum": "LAYER_ALPHA_MATTE"
	},
	{
		"id": 2193,
		"menu": "Layer",
		"label": "Alpha Inverted Matte",
		"enum": "LAYER_ALPHA_INVERTED_MATTE"
	},
	{
		"id": 2194,
		"menu": "Layer",
		"label": "Luma Matte",
		"enum": "LAYER_LUMA_MATTE"
	},
	{
		"id": 2195,
		"menu": "Layer",
		"label": "Luma Inverted Matte",
		"enum": "LAYER_LUMA_INVERTED_MATTE"
	},
	{
		"id": 2197,
		"menu": "Layer",
		"label": "Luminescent Premul",
		"enum": "LAYER_LUMINESCENT_PREMUL"
	},
	{
		"id": 2198,
		"menu": "Layer",
		"label": "Alpha Add",
		"enum": "LAYER_ALPHA_ADD"
	},
	{
		"id": 2200,
		"menu": "Layer",
		"label": "Color Dodge",
		"enum": "LAYER_COLOR_DODGE"
	},
	{
		"id": 2201,
		"menu": "Layer",
		"label": "Color Burn",
		"enum": "LAYER_COLOR_BURN"
	},
	{
		"id": 2202,
		"menu": "Layer",
		"label": "Linear Dodge",
		"enum": "LAYER_LINEAR_DODGE"
	},
	{
		"id": 2203,
		"menu": "Layer",
		"label": "Linear Burn",
		"enum": "LAYER_LINEAR_BURN"
	},
	{
		"id": 2204,
		"menu": "Layer",
		"label": "Linear Light",
		"enum": "LAYER_LINEAR_LIGHT"
	},
	{
		"id": 2205,
		"menu": "Layer",
		"label": "Vivid Light",
		"enum": "LAYER_VIVID_LIGHT"
	},
	{
		"id": 2206,
		"menu": "Layer",
		"label": "Pin Light",
		"enum": "LAYER_PIN_LIGHT"
	},
	{
		"id": 2207,
		"menu": "Layer",
		"label": "Hard Mix",
		"enum": "LAYER_HARD_MIX"
	},
	{
		"id": 2208,
		"menu": "Layer",
		"label": "Lighter Color",
		"enum": "LAYER_LIGHTER_COLOR"
	},
	{
		"id": 2209,
		"menu": "Layer",
		"label": "Darker Color",
		"enum": "LAYER_DARKER_COLOR"
	},
	{
		"id": 2211,
		"menu": "Layer",
		"label": "Divide",
		"enum": "LAYER_DIVIDE"
	},
	{
		"id": 2226,
		"menu": "Animation",
		"label": "Toggle Hold Keyframe",
		"enum": "ANIM_TOGGLE_HOLD_KEYFRAME"
	},
	{
		"id": 2227,
		"menu": "Animation",
		"label": "Keyframe Interpolation...",
		"enum": "ANIM_KEYFRAME_INTERPOLATION"
	},
	{
		"id": 2228,
		"menu": "Animation",
		"label": "Keyframe Velocity...",
		"enum": "ANIM_KEYFRAME_VELOCITY"
	},
	{
		"id": 2233,
		"menu": "Composition",
		"label": "Save Frame As",
		"enum": "COMP_SAVE_FRAME_AS"
	},
	{
		"id": 2236,
		"menu": "File",
		"label": "Multiple Files...",
		"enum": "FILE_MULTIPLE_FILES"
	},
	{
		"id": 2237,
		"menu": "File",
		"label": "Replace Footage",
		"enum": "FILE_REPLACE_FOOTAGE"
	},
	{
		"id": 2244,
		"menu": "Layer",
		"label": "Unlock All Layers",
		"enum": "LAYER_UNLOCK_ALL_LAYERS"
	},
	{
		"id": 2254,
		"menu": "File",
		"label": "Remember Interpretation",
		"enum": "FILE_REMEMBER_INTERPRETATION"
	},
	{
		"id": 2255,
		"menu": "File",
		"label": "Apply Interpretation",
		"enum": "FILE_APPLY_INTERPRETATION"
	},
	{
		"id": 2257,
		"menu": "File",
		"label": "Reload Footage",
		"enum": "FILE_RELOAD_FOOTAGE"
	},
	{
		"id": 2258,
		"menu": "Composition",
		"label": "Composition Flowchart",
		"enum": "COMP_COMPOSITION_FLOWCHART"
	},
	{
		"id": 2264,
		"menu": "File",
		"label": "New",
		"enum": "FILE_NEW"
	},
	{
		"id": 2264,
		"menu": "Layer",
		"label": "New",
		"enum": "LAYER_NEW"
	},
	{
		"id": 2265,
		"menu": "Edit",
		"label": "Templates",
		"enum": "EDIT_TEMPLATES"
	},
	{
		"id": 2269,
		"menu": "Layer",
		"label": "Track Matte",
		"enum": "LAYER_TRACK_MATTE"
	},
	{
		"id": 2274,
		"menu": "View",
		"label": "Show Guides",
		"enum": "VIEW_SHOW_GUIDES"
	},
	{
		"id": 2275,
		"menu": "View",
		"label": "Lock Guides",
		"enum": "VIEW_LOCK_GUIDES"
	},
	{
		"id": 2276,
		"menu": "View",
		"label": "Clear Guides",
		"enum": "VIEW_CLEAR_GUIDES"
	},
	{
		"id": 2277,
		"menu": "View",
		"label": "Show Grid",
		"enum": "VIEW_SHOW_GRID"
	},
	{
		"id": 2278,
		"menu": "View",
		"label": "Snap to Grid",
		"enum": "VIEW_SNAP_TO_GRID"
	},
	{
		"id": 2279,
		"menu": "Layer",
		"label": "Adjustment Layer",
		"enum": "LAYER_ADJUSTMENT_LAYER"
	},
	{
		"id": 2279,
		"menu": "Layer",
		"label": "Adjustment Layer",
		"enum": "LAYER_ADJUSTMENT_LAYER"
	},
	{
		"id": 2280,
		"menu": "View",
		"label": "Show Rulers",
		"enum": "VIEW_SHOW_RULERS"
	},
	{
		"id": 2283,
		"menu": "File",
		"label": "Import Recent Footage",
		"enum": "FILE_IMPORT_RECENT_FOOTAGE"
	},
	{
		"id": 2284,
		"menu": "File",
		"label": "Open Recent",
		"enum": "FILE_OPEN_RECENT"
	},
	{
		"id": 2286,
		"menu": "View",
		"label": "Snap to Guides",
		"enum": "VIEW_SNAP_TO_GUIDES"
	},
	{
		"id": 2289,
		"menu": "Layer",
		"label": "Frame Blending",
		"enum": "LAYER_FRAME_BLENDING"
	},
	{
		"id": 2291,
		"menu": "Layer",
		"label": "Frame Mix",
		"enum": "LAYER_FRAME_MIX"
	},
	{
		"id": 2292,
		"menu": "Layer",
		"label": "Pixel Motion",
		"enum": "LAYER_PIXEL_MOTION"
	},
	{
		"id": 2310,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2311,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2312,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2313,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2314,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2315,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2316,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2317,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2318,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2319,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2330,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2331,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2332,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2333,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2334,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2335,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2336,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2337,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2338,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2339,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 2351,
		"menu": "Edit",
		"label": "Unused",
		"enum": "EDIT_UNUSED"
	},
	{
		"id": 2351,
		"menu": "Edit",
		"label": "Unused",
		"enum": "EDIT_UNUSED"
	},
	{
		"id": 2351,
		"menu": "Edit",
		"label": "Unused",
		"enum": "EDIT_UNUSED"
	},
	{
		"id": 2351,
		"menu": "Edit",
		"label": "Unused",
		"enum": "EDIT_UNUSED"
	},
	{
		"id": 2351,
		"menu": "Edit",
		"label": "Unused",
		"enum": "EDIT_UNUSED"
	},
	{
		"id": 2351,
		"menu": "Edit",
		"label": "Unused",
		"enum": "EDIT_UNUSED"
	},
	{
		"id": 2351,
		"menu": "Edit",
		"label": "Unused",
		"enum": "EDIT_UNUSED"
	},
	{
		"id": 2351,
		"menu": "Edit",
		"label": "Unused",
		"enum": "EDIT_UNUSED"
	},
	{
		"id": 2351,
		"menu": "Edit",
		"label": "Unused",
		"enum": "EDIT_UNUSED"
	},
	{
		"id": 2351,
		"menu": "Edit",
		"label": "Unused",
		"enum": "EDIT_UNUSED"
	},
	{
		"id": 2351,
		"menu": "Edit",
		"label": "Unused",
		"enum": "EDIT_UNUSED"
	},
	{
		"id": 2351,
		"menu": "Edit",
		"label": "Unused",
		"enum": "EDIT_UNUSED"
	},
	{
		"id": 2351,
		"menu": "Edit",
		"label": "Unused",
		"enum": "EDIT_UNUSED"
	},
	{
		"id": 2351,
		"menu": "Edit",
		"label": "Unused",
		"enum": "EDIT_UNUSED"
	},
	{
		"id": 2351,
		"menu": "Edit",
		"label": "Unused",
		"enum": "EDIT_UNUSED"
	},
	{
		"id": 2351,
		"menu": "Edit",
		"label": "Unused",
		"enum": "EDIT_UNUSED"
	},
	{
		"id": 2358,
		"menu": "Edit",
		"label": "Label",
		"enum": "EDIT_LABEL"
	},
	{
		"id": 2359,
		"menu": "Preferences",
		"label": "General...",
		"enum": "PREF_GENERAL"
	},
	{
		"id": 2360,
		"menu": "Composition",
		"label": "Trim Comp to Work Area",
		"enum": "COMP_TRIM_COMP_TO_WORK_AREA"
	},
	{
		"id": 2361,
		"menu": "Preferences",
		"label": "Display...",
		"enum": "PREF_DISPLAY"
	},
	{
		"id": 2362,
		"menu": "Preferences",
		"label": "Import...",
		"enum": "PREF_IMPORT"
	},
	{
		"id": 2363,
		"menu": "Preferences",
		"label": "Output...",
		"enum": "PREF_OUTPUT"
	},
	{
		"id": 2365,
		"menu": "Preferences",
		"label": "Labels...",
		"enum": "PREF_LABELS"
	},
	{
		"id": 2367,
		"menu": "Layer",
		"label": "New Mask",
		"enum": "LAYER_NEW_MASK"
	},
	{
		"id": 2368,
		"menu": "Layer",
		"label": "Remove Mask",
		"enum": "LAYER_REMOVE_MASK"
	},
	{
		"id": 2369,
		"menu": "Layer",
		"label": "Remove All Masks",
		"enum": "LAYER_REMOVE_ALL_MASKS"
	},
	{
		"id": 2370,
		"menu": "Edit",
		"label": "Purge",
		"enum": "EDIT_PURGE"
	},
	{
		"id": 2371,
		"menu": "Edit",
		"label": "Undo",
		"enum": "EDIT_UNDO"
	},
	{
		"id": 2372,
		"menu": "Edit",
		"label": "Image Cache Memory",
		"enum": "EDIT_IMAGE_CACHE_MEMORY"
	},
	{
		"id": 2374,
		"menu": "Layer",
		"label": "Closed",
		"enum": "LAYER_CLOSED"
	},
	{
		"id": 2387,
		"menu": "Animation",
		"label": "Reveal Properties with Keyframes",
		"enum": "ANIM_REVEAL_PROPERTIES_WITH_KEYFRAMES"
	},
	{
		"id": 2435,
		"menu": "View",
		"label": "Show Layer Controls",
		"enum": "VIEW_SHOW_LAYER_CONTROLS"
	},
	{
		"id": 2436,
		"menu": "Edit",
		"label": "Select Label Group",
		"enum": "EDIT_SELECT_LABEL_GROUP"
	},
	{
		"id": 2440,
		"menu": "Layer",
		"label": "Mode",
		"enum": "LAYER_MODE"
	},
	{
		"id": 2442,
		"menu": "Layer",
		"label": "Add",
		"enum": "LAYER_ADD"
	},
	{
		"id": 2442,
		"menu": "Layer",
		"label": "Add",
		"enum": "LAYER_ADD"
	},
	{
		"id": 2443,
		"menu": "Layer",
		"label": "Subtract",
		"enum": "LAYER_SUBTRACT"
	},
	{
		"id": 2443,
		"menu": "Layer",
		"label": "Subtract",
		"enum": "LAYER_SUBTRACT"
	},
	{
		"id": 2444,
		"menu": "Layer",
		"label": "Intersect",
		"enum": "LAYER_INTERSECT"
	},
	{
		"id": 2445,
		"menu": "Layer",
		"label": "Lighten",
		"enum": "LAYER_LIGHTEN"
	},
	{
		"id": 2445,
		"menu": "Layer",
		"label": "Lighten",
		"enum": "LAYER_LIGHTEN"
	},
	{
		"id": 2446,
		"menu": "Layer",
		"label": "Darken",
		"enum": "LAYER_DARKEN"
	},
	{
		"id": 2446,
		"menu": "Layer",
		"label": "Darken",
		"enum": "LAYER_DARKEN"
	},
	{
		"id": 2447,
		"menu": "Layer",
		"label": "Difference",
		"enum": "LAYER_DIFFERENCE"
	},
	{
		"id": 2447,
		"menu": "Layer",
		"label": "Difference",
		"enum": "LAYER_DIFFERENCE"
	},
	{
		"id": 2448,
		"menu": "Layer",
		"label": "Reset Mask",
		"enum": "LAYER_RESET_MASK"
	},
	{
		"id": 2450,
		"menu": "Animation",
		"label": "Apply Animation Preset...",
		"enum": "ANIM_APPLY_ANIMATION_PRESET"
	},
	{
		"id": 2451,
		"menu": "Animation",
		"label": "Recent Animation Presets",
		"enum": "ANIM_RECENT_ANIMATION_PRESETS"
	},
	{
		"id": 2452,
		"menu": "Effect",
		"label": "Last Effect",
		"enum": "EFFECT_LAST_EFFECT"
	},
	{
		"id": 2453,
		"menu": "Layer",
		"label": "Mask Opacity...",
		"enum": "LAYER_MASK_OPACITY"
	},
	{
		"id": 2454,
		"menu": "Layer",
		"label": "Locked",
		"enum": "LAYER_LOCKED"
	},
	{
		"id": 2455,
		"menu": "Layer",
		"label": "Lock Other Masks",
		"enum": "LAYER_LOCK_OTHER_MASKS"
	},
	{
		"id": 2456,
		"menu": "Layer",
		"label": "Unlock All Masks",
		"enum": "LAYER_UNLOCK_ALL_MASKS"
	},
	{
		"id": 2457,
		"menu": "File",
		"label": "Watch Folder...",
		"enum": "FILE_WATCH_FOLDER"
	},
	{
		"id": 2460,
		"menu": "Animation",
		"label": "Recent Favorites List",
		"enum": "ANIM_RECENT_FAVORITES_LIST"
	},
	{
		"id": 2481,
		"menu": "Edit",
		"label": "Snapshot",
		"enum": "EDIT_SNAPSHOT"
	},
	{
		"id": 2482,
		"menu": "File",
		"label": "Collect Files...",
		"enum": "FILE_COLLECT_FILES"
	},
	{
		"id": 2494,
		"menu": "File",
		"label": "Export",
		"enum": "FILE_EXPORT"
	},
	{
		"id": 2509,
		"menu": "Animation",
		"label": "Easy Ease",
		"enum": "ANIM_EASY_EASE"
	},
	{
		"id": 2510,
		"menu": "Animation",
		"label": "Easy Ease In",
		"enum": "ANIM_EASY_EASE_IN"
	},
	{
		"id": 2511,
		"menu": "Animation",
		"label": "Easy Ease Out",
		"enum": "ANIM_EASY_EASE_OUT"
	},
	{
		"id": 2517,
		"menu": "Layer",
		"label": "Reveal Layer Source in Project",
		"enum": "LAYER_REVEAL_LAYER_SOURCE_IN_PROJECT"
	},
	{
		"id": 2522,
		"menu": "Layer",
		"label": "Reveal Layer in Project Flowchart",
		"enum": "LAYER_REVEAL_LAYER_IN_PROJECT_FLOWCHART"
	},
	{
		"id": 2523,
		"menu": "Layer",
		"label": "Open Layer Source",
		"enum": "LAYER_OPEN_LAYER_SOURCE"
	},
	{
		"id": 2524,
		"menu": "Layer",
		"label": "Hide Locked Masks",
		"enum": "LAYER_HIDE_LOCKED_MASKS"
	},
	{
		"id": 2538,
		"menu": "Layer",
		"label": "Delete All Markers",
		"enum": "LAYER_DELETE_ALL_MARKERS"
	},
	{
		"id": 2539,
		"menu": "Layer",
		"label": "Update Markers From Source",
		"enum": "LAYER_UPDATE_MARKERS_FROM_SOURCE"
	},
	{
		"id": 2541,
		"menu": "Layer",
		"label": "3D Layer",
		"enum": "LAYER_3D_LAYER"
	},
	{
		"id": 2542,
		"menu": "Help",
		"label": "After Effects Help...",
		"enum": "HELP_AFTER_EFFECTS_HELP"
	},
	{
		"id": 2543,
		"menu": "Help",
		"label": "Effect Reference...",
		"enum": "HELP_EFFECT_REFERENCE"
	},
	{
		"id": 2544,
		"menu": "Help",
		"label": "Scripting Help...",
		"enum": "HELP_SCRIPTING_HELP"
	},
	{
		"id": 2548,
		"menu": "Help",
		"label": "Expression Reference...",
		"enum": "HELP_EXPRESSION_REFERENCE"
	},
	{
		"id": 2550,
		"menu": "Help",
		"label": "System Compatibility Report...",
		"enum": "HELP_SYSTEM_COMPATIBILITY_REPORT"
	},
	{
		"id": 2552,
		"menu": "File",
		"label": "Adobe Dynamic Link",
		"enum": "FILE_ADOBE_DYNAMIC_LINK"
	},
	{
		"id": 2553,
		"menu": "File",
		"label": "New Premiere Pro Sequence...",
		"enum": "FILE_NEW_PREMIERE_PRO_SEQUENCE"
	},
	{
		"id": 2554,
		"menu": "File",
		"label": "Import Premiere Pro Sequence...",
		"enum": "FILE_IMPORT_PREMIERE_PRO_SEQUENCE"
	},
	{
		"id": 2562,
		"menu": "File",
		"label": "Reveal in Finder",
		"enum": "FILE_REVEAL_IN_FINDER"
	},
	{
		"id": 2562,
		"menu": "Layer",
		"label": "Reveal in Finder",
		"enum": "LAYER_REVEAL_IN_FINDER"
	},
	{
		"id": 2562,
		"menu": "Layer",
		"label": "Reveal in Finder",
		"enum": "LAYER_REVEAL_IN_FINDER"
	},
	{
		"id": 2563,
		"menu": "Layer",
		"label": "Light...",
		"enum": "LAYER_LIGHT"
	},
	{
		"id": 2564,
		"menu": "Layer",
		"label": "Camera...",
		"enum": "LAYER_CAMERA"
	},
	{
		"id": 2565,
		"menu": "Layer",
		"label": "Lock Markers",
		"enum": "LAYER_LOCK_MARKERS"
	},
	{
		"id": 2566,
		"menu": "Layer",
		"label": "Solo",
		"enum": "LAYER_SOLO"
	},
	{
		"id": 2568,
		"menu": "Animation",
		"label": "Track Motion",
		"enum": "ANIM_TRACK_MOTION"
	},
	{
		"id": 2605,
		"menu": "Layer",
		"label": "Reset",
		"enum": "LAYER_RESET"
	},
	{
		"id": 2607,
		"menu": "File",
		"label": "Find",
		"enum": "FILE_FIND"
	},
	{
		"id": 2611,
		"menu": "File",
		"label": "Project Settings...",
		"enum": "FILE_PROJECT_SETTINGS"
	},
	{
		"id": 2613,
		"menu": "Edit",
		"label": "Lift Work Area",
		"enum": "EDIT_LIFT_WORK_AREA"
	},
	{
		"id": 2614,
		"menu": "Edit",
		"label": "Extract Work Area",
		"enum": "EDIT_EXTRACT_WORK_AREA"
	},
	{
		"id": 2623,
		"menu": "Layer",
		"label": "Orientation...",
		"enum": "LAYER_ORIENTATION"
	},
	{
		"id": 2624,
		"menu": "View",
		"label": "Assign 3D View Shortcut",
		"enum": "VIEW_ASSIGN_3D_VIEW_SHORTCUT"
	},
	{
		"id": 2625,
		"menu": "View",
		"label": "Switch 3D View",
		"enum": "VIEW_SWITCH_3D_VIEW"
	},
	{
		"id": 2626,
		"menu": "View",
		"label": "A",
		"enum": "VIEW_A"
	},
	{
		"id": 2627,
		"menu": "View",
		"label": "B",
		"enum": "VIEW_B"
	},
	{
		"id": 2628,
		"menu": "View",
		"label": "C",
		"enum": "VIEW_C"
	},
	{
		"id": 2639,
		"menu": "Animation",
		"label": "Convert Expression to Keyframes",
		"enum": "ANIM_CONVERT_EXPRESSION_TO_KEYFRAMES"
	},
	{
		"id": 2642,
		"menu": "View",
		"label": "Reset 3D View",
		"enum": "VIEW_RESET_3D_VIEW"
	},
	{
		"id": 2643,
		"menu": "Animation",
		"label": "Track this Property",
		"enum": "ANIM_TRACK_THIS_PROPERTY"
	},
	{
		"id": 2645,
		"menu": "View",
		"label": "Create Camera from 3D View",
		"enum": "VIEW_CREATE_CAMERA_FROM_3D_VIEW"
	},
	{
		"id": 2701,
		"menu": "Animation",
		"label": "Set Keyframe",
		"enum": "ANIM_SET_KEYFRAME"
	},
	{
		"id": 2702,
		"menu": "Animation",
		"label": "Add Expression",
		"enum": "ANIM_ADD_EXPRESSION"
	},
	{
		"id": 2703,
		"menu": "View",
		"label": "Switch to Last 3D View",
		"enum": "VIEW_SWITCH_TO_LAST_3D_VIEW"
	},
	{
		"id": 2704,
		"menu": "Preferences",
		"label": "Video Preview...",
		"enum": "PREF_VIDEO_PREVIEW"
	},
	{
		"id": 2705,
		"menu": "Preferences",
		"label": "Previews...",
		"enum": "PREF_PREVIEWS"
	},
	{
		"id": 2710,
		"menu": "View",
		"label": "Active Camera",
		"enum": "VIEW_ACTIVE_CAMERA"
	},
	{
		"id": 2711,
		"menu": "View",
		"label": "Front",
		"enum": "VIEW_FRONT"
	},
	{
		"id": 2712,
		"menu": "View",
		"label": "Left",
		"enum": "VIEW_LEFT"
	},
	{
		"id": 2713,
		"menu": "View",
		"label": "Top",
		"enum": "VIEW_TOP"
	},
	{
		"id": 2714,
		"menu": "View",
		"label": "Back",
		"enum": "VIEW_BACK"
	},
	{
		"id": 2715,
		"menu": "View",
		"label": "Right",
		"enum": "VIEW_RIGHT"
	},
	{
		"id": 2716,
		"menu": "View",
		"label": "Bottom",
		"enum": "VIEW_BOTTOM"
	},
	{
		"id": 2717,
		"menu": "View",
		"label": "Custom View 1",
		"enum": "VIEW_CUSTOM_VIEW_1"
	},
	{
		"id": 2718,
		"menu": "View",
		"label": "Custom View 2",
		"enum": "VIEW_CUSTOM_VIEW_2"
	},
	{
		"id": 2719,
		"menu": "View",
		"label": "Custom View 3",
		"enum": "VIEW_CUSTOM_VIEW_3"
	},
	{
		"id": 2731,
		"menu": "Layer",
		"label": "Reveal Expression Errors",
		"enum": "LAYER_REVEAL_EXPRESSION_ERRORS"
	},
	{
		"id": 2732,
		"menu": "Layer",
		"label": "Fit to Comp Width",
		"enum": "LAYER_FIT_TO_COMP_WIDTH"
	},
	{
		"id": 2733,
		"menu": "Layer",
		"label": "Fit to Comp Height",
		"enum": "LAYER_FIT_TO_COMP_HEIGHT"
	},
	{
		"id": 2735,
		"menu": "File",
		"label": "Reduce Project",
		"enum": "FILE_REDUCE_PROJECT"
	},
	{
		"id": 2736,
		"menu": "Layer",
		"label": "Mask Expansion...",
		"enum": "LAYER_MASK_EXPANSION"
	},
	{
		"id": 2738,
		"menu": "Window",
		"label": "Workspace",
		"enum": "WINDOW_WORKSPACE"
	},
	{
		"id": 2739,
		"menu": "Window",
		"label": "Save Changes to this Workspace",
		"enum": "WINDOW_SAVE_CHANGES_TO_THIS_WORKSPACE"
	},
	{
		"id": 2767,
		"menu": "Layer",
		"label": "Null Object",
		"enum": "LAYER_NULL_OBJECT"
	},
	{
		"id": 2768,
		"menu": "Layer",
		"label": "Set First Vertex",
		"enum": "LAYER_SET_FIRST_VERTEX"
	},
	{
		"id": 2771,
		"menu": "Animation",
		"label": "Reveal All Modified Properties",
		"enum": "ANIM_REVEAL_ALL_MODIFIED_PROPERTIES"
	},
	{
		"id": 2776,
		"menu": "View",
		"label": "View Options...",
		"enum": "VIEW_VIEW_OPTIONS"
	},
	{
		"id": 2777,
		"menu": "File",
		"label": "Create Proxy",
		"enum": "FILE_CREATE_PROXY"
	},
	{
		"id": 2778,
		"menu": "File",
		"label": "Still...",
		"enum": "FILE_STILL"
	},
	{
		"id": 2779,
		"menu": "File",
		"label": "Movie...",
		"enum": "FILE_MOVIE"
	},
	{
		"id": 2780,
		"menu": "Composition",
		"label": "Pre-render...",
		"enum": "COMP_PRE_RENDER"
	},
	{
		"id": 2781,
		"menu": "Layer",
		"label": "Next Blending Mode",
		"enum": "LAYER_NEXT_BLENDING_MODE"
	},
	{
		"id": 2782,
		"menu": "Layer",
		"label": "Previous Blending Mode",
		"enum": "LAYER_PREVIOUS_BLENDING_MODE"
	},
	{
		"id": 2792,
		"menu": "Layer",
		"label": "Rotation...",
		"enum": "LAYER_ROTATION"
	},
	{
		"id": 2796,
		"menu": "File",
		"label": "New Comp from Selection...",
		"enum": "FILE_NEW_COMP_FROM_SELECTION"
	},
	{
		"id": 2797,
		"menu": "Layer",
		"label": "Motion Blur",
		"enum": "LAYER_MOTION_BLUR"
	},
	{
		"id": 2797,
		"menu": "Layer",
		"label": "Motion Blur",
		"enum": "LAYER_MOTION_BLUR"
	},
	{
		"id": 2798,
		"menu": "Layer",
		"label": "Same As Layer",
		"enum": "LAYER_SAME_AS_LAYER"
	},
	{
		"id": 2799,
		"menu": "Layer",
		"label": "On",
		"enum": "LAYER_ON"
	},
	{
		"id": 2800,
		"menu": "Layer",
		"label": "Off",
		"enum": "LAYER_OFF"
	},
	{
		"id": 2800,
		"menu": "Layer",
		"label": "Off",
		"enum": "LAYER_OFF"
	},
	{
		"id": 2834,
		"menu": "View",
		"label": "Look at Selected Layers",
		"enum": "VIEW_LOOK_AT_SELECTED_LAYERS"
	},
	{
		"id": 2835,
		"menu": "View",
		"label": "Look at All Layers",
		"enum": "VIEW_LOOK_AT_ALL_LAYERS"
	},
	{
		"id": 2933,
		"menu": "Layer",
		"label": "Create Masks from Text",
		"enum": "LAYER_CREATE_MASKS_FROM_TEXT"
	},
	{
		"id": 2995,
		"menu": "Edit",
		"label": "History",
		"enum": "EDIT_HISTORY"
	},
	{
		"id": 2997,
		"menu": "Composition",
		"label": "Crop Comp to Region of Interest",
		"enum": "COMP_CROP_COMP_TO_REGION_OF_INTEREST"
	},
	{
		"id": 3000,
		"menu": "File",
		"label": "Solid...",
		"enum": "FILE_SOLID"
	},
	{
		"id": 3000,
		"menu": "File",
		"label": "Solid...",
		"enum": "FILE_SOLID"
	},
	{
		"id": 3000,
		"menu": "Layer",
		"label": "Solid...",
		"enum": "LAYER_SOLID"
	},
	{
		"id": 3011,
		"menu": "Window",
		"label": "Character",
		"enum": "WINDOW_CHARACTER"
	},
	{
		"id": 3012,
		"menu": "Window",
		"label": "Paragraph",
		"enum": "WINDOW_PARAGRAPH"
	},
	{
		"id": 3014,
		"menu": "Window",
		"label": "Brushes",
		"enum": "WINDOW_BRUSHES"
	},
	{
		"id": 3016,
		"menu": "Animation",
		"label": "Animate Text",
		"enum": "ANIM_ANIMATE_TEXT"
	},
	{
		"id": 3017,
		"menu": "Animation",
		"label": "Add Text Selector",
		"enum": "ANIM_ADD_TEXT_SELECTOR"
	},
	{
		"id": 3018,
		"menu": "Animation",
		"label": "Range",
		"enum": "ANIM_RANGE"
	},
	{
		"id": 3019,
		"menu": "Animation",
		"label": "Anchor Point",
		"enum": "ANIM_ANCHOR_POINT"
	},
	{
		"id": 3020,
		"menu": "Animation",
		"label": "Position",
		"enum": "ANIM_POSITION"
	},
	{
		"id": 3021,
		"menu": "Animation",
		"label": "Scale",
		"enum": "ANIM_SCALE"
	},
	{
		"id": 3022,
		"menu": "Animation",
		"label": "Skew",
		"enum": "ANIM_SKEW"
	},
	{
		"id": 3023,
		"menu": "Animation",
		"label": "Rotation",
		"enum": "ANIM_ROTATION"
	},
	{
		"id": 3024,
		"menu": "Animation",
		"label": "Stroke Width",
		"enum": "ANIM_STROKE_WIDTH"
	},
	{
		"id": 3025,
		"menu": "Animation",
		"label": "Tracking",
		"enum": "ANIM_TRACKING"
	},
	{
		"id": 3026,
		"menu": "Animation",
		"label": "Line Anchor",
		"enum": "ANIM_LINE_ANCHOR"
	},
	{
		"id": 3027,
		"menu": "Animation",
		"label": "Character Offset",
		"enum": "ANIM_CHARACTER_OFFSET"
	},
	{
		"id": 3028,
		"menu": "Animation",
		"label": "Character Value",
		"enum": "ANIM_CHARACTER_VALUE"
	},
	{
		"id": 3029,
		"menu": "Animation",
		"label": "RGB",
		"enum": "ANIM_RGB"
	},
	{
		"id": 3029,
		"menu": "Animation",
		"label": "RGB",
		"enum": "ANIM_RGB"
	},
	{
		"id": 3032,
		"menu": "Animation",
		"label": "Brightness",
		"enum": "ANIM_BRIGHTNESS"
	},
	{
		"id": 3032,
		"menu": "Animation",
		"label": "Brightness",
		"enum": "ANIM_BRIGHTNESS"
	},
	{
		"id": 3039,
		"menu": "Animation",
		"label": "Fill Color",
		"enum": "ANIM_FILL_COLOR"
	},
	{
		"id": 3040,
		"menu": "Animation",
		"label": "Stroke Color",
		"enum": "ANIM_STROKE_COLOR"
	},
	{
		"id": 3041,
		"menu": "Animation",
		"label": "Wiggly",
		"enum": "ANIM_WIGGLY"
	},
	{
		"id": 3042,
		"menu": "Animation",
		"label": "Opacity",
		"enum": "ANIM_OPACITY"
	},
	{
		"id": 3042,
		"menu": "Animation",
		"label": "Opacity",
		"enum": "ANIM_OPACITY"
	},
	{
		"id": 3042,
		"menu": "Animation",
		"label": "Opacity",
		"enum": "ANIM_OPACITY"
	},
	{
		"id": 3043,
		"menu": "Animation",
		"label": "Line Spacing",
		"enum": "ANIM_LINE_SPACING"
	},
	{
		"id": 3044,
		"menu": "Layer",
		"label": "Auto-trace...",
		"enum": "LAYER_AUTO_TRACE"
	},
	{
		"id": 3045,
		"menu": "Window",
		"label": "Paint",
		"enum": "WINDOW_PAINT"
	},
	{
		"id": 3045,
		"menu": "Window",
		"label": "Paint",
		"enum": "WINDOW_PAINT"
	},
	{
		"id": 3052,
		"menu": "Animation",
		"label": "All Transform Properties",
		"enum": "ANIM_ALL_TRANSFORM_PROPERTIES"
	},
	{
		"id": 3053,
		"menu": "Layer",
		"label": "RotoBezier",
		"enum": "LAYER_ROTOBEZIER"
	},
	{
		"id": 3058,
		"menu": "Animation",
		"label": "Remove All Text Animators",
		"enum": "ANIM_REMOVE_ALL_TEXT_ANIMATORS"
	},
	{
		"id": 3063,
		"menu": "Animation",
		"label": "Expression",
		"enum": "ANIM_EXPRESSION"
	},
	{
		"id": 3070,
		"menu": "File",
		"label": "With Layered Comp",
		"enum": "FILE_WITH_LAYERED_COMP"
	},
	{
		"id": 3071,
		"menu": "Preferences",
		"label": "Appearance...",
		"enum": "PREF_APPEARANCE"
	},
	{
		"id": 3075,
		"menu": "Animation",
		"label": "Save Animation Preset...",
		"enum": "ANIM_SAVE_ANIMATION_PRESET"
	},
	{
		"id": 3081,
		"menu": "Layer",
		"label": "Guide Layer",
		"enum": "LAYER_GUIDE_LAYER"
	},
	{
		"id": 3088,
		"menu": "File",
		"label": "Increment and Save",
		"enum": "FILE_INCREMENT_AND_SAVE"
	},
	{
		"id": 3122,
		"menu": "Preferences",
		"label": "Auto-Save...",
		"enum": "PREF_AUTO_SAVE"
	},
	{
		"id": 3125,
		"menu": "Preferences",
		"label": "Audio Hardware...",
		"enum": "PREF_AUDIO_HARDWARE"
	},
	{
		"id": 3126,
		"menu": "Preferences",
		"label": "Audio Output Mapping...",
		"enum": "PREF_AUDIO_OUTPUT_MAPPING"
	},
	{
		"id": 3129,
		"menu": "Preferences",
		"label": "New Project...",
		"enum": "PREF_NEW_PROJECT"
	},
	{
		"id": 3130,
		"menu": "Preferences",
		"label": "Type...",
		"enum": "PREF_TYPE"
	},
	{
		"id": 3132,
		"menu": "Preferences",
		"label": "3D...",
		"enum": "PREF_3D"
	},
	{
		"id": 3147,
		"menu": "File",
		"label": "Adobe Photoshop File...",
		"enum": "FILE_ADOBE_PHOTOSHOP_FILE"
	},
	{
		"id": 3147,
		"menu": "Layer",
		"label": "Adobe Photoshop File...",
		"enum": "LAYER_ADOBE_PHOTOSHOP_FILE"
	},
	{
		"id": 3154,
		"menu": "File",
		"label": "Close Project",
		"enum": "FILE_CLOSE_PROJECT"
	},
	{
		"id": 3155,
		"menu": "Layer",
		"label": "Time",
		"enum": "LAYER_TIME"
	},
	{
		"id": 3155,
		"menu": "Effect",
		"label": "Time",
		"enum": "EFFECT_TIME"
	},
	{
		"id": 3562,
		"menu": "Help",
		"label": "Keyboard Shortcuts...",
		"enum": "HELP_KEYBOARD_SHORTCUTS"
	},
	{
		"id": 3563,
		"menu": "Help",
		"label": "Animation Presets...",
		"enum": "HELP_ANIMATION_PRESETS"
	},
	{
		"id": 3565,
		"menu": "Window",
		"label": "Save as New Workspace...",
		"enum": "WINDOW_SAVE_AS_NEW_WORKSPACE"
	},
	{
		"id": 3566,
		"menu": "Window",
		"label": "Reset “Minimal” to Saved Layout",
		"enum": "WINDOW_RESET_MINIMAL_TO_SAVED_LAYOUT"
	},
	{
		"id": 3567,
		"menu": "Window",
		"label": "All Panels",
		"enum": "WINDOW_ALL_PANELS"
	},
	{
		"id": 3568,
		"menu": "Window",
		"label": "Animation",
		"enum": "WINDOW_ANIMATION"
	},
	{
		"id": 3570,
		"menu": "Window",
		"label": "Default",
		"enum": "WINDOW_DEFAULT"
	},
	{
		"id": 3571,
		"menu": "Window",
		"label": "Effects",
		"enum": "WINDOW_EFFECTS"
	},
	{
		"id": 3575,
		"menu": "Window",
		"label": "Minimal",
		"enum": "WINDOW_MINIMAL"
	},
	{
		"id": 3576,
		"menu": "Window",
		"label": "Motion Tracking",
		"enum": "WINDOW_MOTION_TRACKING"
	},
	{
		"id": 3578,
		"menu": "Window",
		"label": "Small Screen",
		"enum": "WINDOW_SMALL_SCREEN"
	},
	{
		"id": 3579,
		"menu": "Window",
		"label": "Standard",
		"enum": "WINDOW_STANDARD"
	},
	{
		"id": 3581,
		"menu": "Window",
		"label": "Undocked Panels",
		"enum": "WINDOW_UNDOCKED_PANELS"
	},
	{
		"id": 3689,
		"menu": "File",
		"label": "Browse in Bridge...",
		"enum": "FILE_BROWSE_IN_BRIDGE"
	},
	{
		"id": 3690,
		"menu": "File",
		"label": "Reveal in Bridge",
		"enum": "FILE_REVEAL_IN_BRIDGE"
	},
	{
		"id": 3691,
		"menu": "Animation",
		"label": "Browse Presets...",
		"enum": "ANIM_BROWSE_PRESETS"
	},
	{
		"id": 3693,
		"menu": "Animation",
		"label": "Time-Reverse Keyframes",
		"enum": "ANIM_TIME_REVERSE_KEYFRAMES"
	},
	{
		"id": 3695,
		"menu": "Layer",
		"label": "Freeze Frame",
		"enum": "LAYER_FREEZE_FRAME"
	},
	{
		"id": 3696,
		"menu": "Layer",
		"label": "Reveal Composition in Project",
		"enum": "LAYER_REVEAL_COMPOSITION_IN_PROJECT"
	},
	{
		"id": 3697,
		"menu": "Edit",
		"label": "Edit in Adobe Audition",
		"enum": "EDIT_EDIT_IN_ADOBE_AUDITION"
	},
	{
		"id": 3698,
		"menu": "Animation",
		"label": "Blur",
		"enum": "ANIM_BLUR"
	},
	{
		"id": 3699,
		"menu": "Help",
		"label": "After Effects Online Tutorials...",
		"enum": "HELP_AFTER_EFFECTS_ONLINE_TUTORIALS"
	},
	{
		"id": 3700,
		"menu": "View",
		"label": "New Viewer",
		"enum": "VIEW_NEW_VIEWER"
	},
	{
		"id": 3703,
		"menu": "View",
		"label": "Simulate Output",
		"enum": "VIEW_SIMULATE_OUTPUT"
	},
	{
		"id": 3705,
		"menu": "View",
		"label": "No Output Simulation",
		"enum": "VIEW_NO_OUTPUT_SIMULATION"
	},
	{
		"id": 3706,
		"menu": "View",
		"label": "Kodak 5218 to Kodak 2383",
		"enum": "VIEW_KODAK_5218_TO_KODAK_2383"
	},
	{
		"id": 3707,
		"menu": "Window",
		"label": "Assign Shortcut to “Minimal” Workspace",
		"enum": "WINDOW_ASSIGN_SHORTCUT_TO_MINIMAL_WORKSPACE"
	},
	{
		"id": 3708,
		"menu": "Window",
		"label": "Shift+F10 (Replace “Default”)",
		"enum": "WINDOW_SHIFT_F10_REPLACE_DEFAULT"
	},
	{
		"id": 3709,
		"menu": "Window",
		"label": "Shift+F11 (Replace “Learn”)",
		"enum": "WINDOW_SHIFT_F11_REPLACE_LEARN"
	},
	{
		"id": 3710,
		"menu": "Window",
		"label": "Shift+F12 (Replace “Standard”)",
		"enum": "WINDOW_SHIFT_F12_REPLACE_STANDARD"
	},
	{
		"id": 3736,
		"menu": "Layer",
		"label": "Shape Layer",
		"enum": "LAYER_SHAPE_LAYER"
	},
	{
		"id": 3737,
		"menu": "Animation",
		"label": "Enable Per-character 3D",
		"enum": "ANIM_ENABLE_PER_CHARACTER_3D"
	},
	{
		"id": 3739,
		"menu": "Layer",
		"label": "Layer Styles",
		"enum": "LAYER_LAYER_STYLES"
	},
	{
		"id": 3741,
		"menu": "Layer",
		"label": "Group Shapes",
		"enum": "LAYER_GROUP_SHAPES"
	},
	{
		"id": 3742,
		"menu": "Layer",
		"label": "Ungroup Shapes",
		"enum": "LAYER_UNGROUP_SHAPES"
	},
	{
		"id": 3745,
		"menu": "Layer",
		"label": "Mask and Shape Path",
		"enum": "LAYER_MASK_AND_SHAPE_PATH"
	},
	{
		"id": 3754,
		"menu": "View",
		"label": "HDTV (Rec. 709)",
		"enum": "VIEW_HDTV_REC_709"
	},
	{
		"id": 3755,
		"menu": "View",
		"label": "SDTV NTSC",
		"enum": "VIEW_SDTV_NTSC"
	},
	{
		"id": 3756,
		"menu": "View",
		"label": "SDTV PAL",
		"enum": "VIEW_SDTV_PAL"
	},
	{
		"id": 3757,
		"menu": "View",
		"label": "Legacy Macintosh RGB (Gamma 1.8)",
		"enum": "VIEW_LEGACY_MACINTOSH_RGB_GAMMA_1_8"
	},
	{
		"id": 3758,
		"menu": "View",
		"label": "Internet Standard RGB (sRGB)",
		"enum": "VIEW_INTERNET_STANDARD_RGB_SRGB"
	},
	{
		"id": 3759,
		"menu": "View",
		"label": "My Custom RGB",
		"enum": "VIEW_MY_CUSTOM_RGB"
	},
	{
		"id": 3764,
		"menu": "Animation",
		"label": "Separate Dimensions",
		"enum": "ANIM_SEPARATE_DIMENSIONS"
	},
	{
		"id": 3766,
		"menu": "Layer",
		"label": "Flip Horizontal",
		"enum": "LAYER_FLIP_HORIZONTAL"
	},
	{
		"id": 3767,
		"menu": "Layer",
		"label": "Flip Vertical",
		"enum": "LAYER_FLIP_VERTICAL"
	},
	{
		"id": 3781,
		"menu": "Layer",
		"label": "Create Shapes from Text",
		"enum": "LAYER_CREATE_SHAPES_FROM_TEXT"
	},
	{
		"id": 3784,
		"menu": "Layer",
		"label": "Open Layer",
		"enum": "LAYER_OPEN_LAYER"
	},
	{
		"id": 3785,
		"menu": "File",
		"label": "Save a Copy As XML...",
		"enum": "FILE_SAVE_A_COPY_AS_XML"
	},
	{
		"id": 3788,
		"menu": "Window",
		"label": "Metadata",
		"enum": "WINDOW_METADATA"
	},
	{
		"id": 3792,
		"menu": "Composition",
		"label": "Composition Mini-Flowchart",
		"enum": "COMP_COMPOSITION_MINI_FLOWCHART"
	},
	{
		"id": 3798,
		"menu": "Layer",
		"label": "Arrange",
		"enum": "LAYER_ARRANGE"
	},
	{
		"id": 3799,
		"menu": "Layer",
		"label": "Convert to Editable Text",
		"enum": "LAYER_CONVERT_TO_EDITABLE_TEXT"
	},
	{
		"id": 3800,
		"menu": "File",
		"label": "Add to Adobe Media Encoder Queue...",
		"enum": "FILE_ADD_TO_ADOBE_MEDIA_ENCODER_QUEUE"
	},
	{
		"id": 3800,
		"menu": "Composition",
		"label": "Add to Adobe Media Encoder Queue...",
		"enum": "COMP_ADD_TO_ADOBE_MEDIA_ENCODER_QUEUE"
	},
	{
		"id": 3814,
		"menu": "View",
		"label": "Universal Camera Film to Kodak 2383",
		"enum": "VIEW_UNIVERSAL_CAMERA_FILM_TO_KODAK_2383"
	},
	{
		"id": 3819,
		"menu": "Layer",
		"label": "Center In View",
		"enum": "LAYER_CENTER_IN_VIEW"
	},
	{
		"id": 3837,
		"menu": "Help",
		"label": "Provide Feedback...",
		"enum": "HELP_PROVIDE_FEEDBACK"
	},
	{
		"id": 3840,
		"menu": "File",
		"label": "Save As",
		"enum": "FILE_SAVE_AS"
	},
	{
		"id": 3842,
		"menu": "Layer",
		"label": "Camera",
		"enum": "LAYER_CAMERA"
	},
	{
		"id": 3843,
		"menu": "Layer",
		"label": "Create Stereo 3D Rig",
		"enum": "LAYER_CREATE_STEREO_3D_RIG"
	},
	{
		"id": 3844,
		"menu": "Layer",
		"label": "Create Orbit Null",
		"enum": "LAYER_CREATE_ORBIT_NULL"
	},
	{
		"id": 3845,
		"menu": "Layer",
		"label": "Link Focus Distance to Point of Interest",
		"enum": "LAYER_LINK_FOCUS_DISTANCE_TO_POINT_OF_INTEREST"
	},
	{
		"id": 3846,
		"menu": "Layer",
		"label": "Set Focus Distance to Layer",
		"enum": "LAYER_SET_FOCUS_DISTANCE_TO_LAYER"
	},
	{
		"id": 3847,
		"menu": "Layer",
		"label": "Link Focus Distance to Layer",
		"enum": "LAYER_LINK_FOCUS_DISTANCE_TO_LAYER"
	},
	{
		"id": 3972,
		"menu": "Layer",
		"label": "Environment Layer",
		"enum": "LAYER_ENVIRONMENT_LAYER"
	},
	{
		"id": 3973,
		"menu": "Layer",
		"label": "Create Shapes from Vector Layer",
		"enum": "LAYER_CREATE_SHAPES_FROM_VECTOR_LAYER"
	},
	{
		"id": 3983,
		"menu": "Animation",
		"label": "Track Camera",
		"enum": "ANIM_TRACK_CAMERA"
	},
	{
		"id": 3986,
		"menu": "Animation",
		"label": "Warp Stabilizer VFX",
		"enum": "ANIM_WARP_STABILIZER_VFX"
	},
	{
		"id": 3987,
		"menu": "Layer",
		"label": "Feather Falloff",
		"enum": "LAYER_FEATHER_FALLOFF"
	},
	{
		"id": 3988,
		"menu": "Layer",
		"label": "Smooth",
		"enum": "LAYER_SMOOTH"
	},
	{
		"id": 3989,
		"menu": "Layer",
		"label": "Linear",
		"enum": "LAYER_LINEAR"
	},
	{
		"id": 3995,
		"menu": "Help",
		"label": "Online User Forums...",
		"enum": "HELP_ONLINE_USER_FORUMS"
	},
	{
		"id": 4001,
		"menu": "File",
		"label": "Dependencies",
		"enum": "FILE_DEPENDENCIES"
	},
	{
		"id": 4002,
		"menu": "File",
		"label": "Find Missing Effects",
		"enum": "FILE_FIND_MISSING_EFFECTS"
	},
	{
		"id": 4003,
		"menu": "File",
		"label": "Find Missing Fonts",
		"enum": "FILE_FIND_MISSING_FONTS"
	},
	{
		"id": 4004,
		"menu": "File",
		"label": "Find Missing Footage",
		"enum": "FILE_FIND_MISSING_FOOTAGE"
	},
	{
		"id": 4007,
		"menu": "File",
		"label": "MAXON CINEMA 4D File...",
		"enum": "FILE_MAXON_CINEMA_4D_FILE"
	},
	{
		"id": 4007,
		"menu": "Layer",
		"label": "MAXON CINEMA 4D File...",
		"enum": "LAYER_MAXON_CINEMA_4D_FILE"
	},
	{
		"id": 4009,
		"menu": "Help",
		"label": "Adobe Crash Reporter...",
		"enum": "HELP_ADOBE_CRASH_REPORTER"
	},
	{
		"id": 4011,
		"menu": "Animation",
		"label": "Reveal Properties with Animation",
		"enum": "ANIM_REVEAL_PROPERTIES_WITH_ANIMATION"
	},
	{
		"id": 4013,
		"menu": "Window",
		"label": "Media Browser",
		"enum": "WINDOW_MEDIA_BROWSER"
	},
	{
		"id": 4016,
		"menu": "Window",
		"label": "Extensions",
		"enum": "WINDOW_EXTENSIONS"
	},
	{
		"id": 4017,
		"menu": "File",
		"label": "Add Fonts from Adobe...",
		"enum": "FILE_ADD_FONTS_FROM_ADOBE"
	},
	{
		"id": 4018,
		"menu": "Window",
		"label": "Find Extensions on Exchange...",
		"enum": "WINDOW_FIND_EXTENSIONS_ON_EXCHANGE"
	},
	{
		"id": 4022,
		"menu": "File",
		"label": "From Libraries...",
		"enum": "FILE_FROM_LIBRARIES"
	},
	{
		"id": 4023,
		"menu": "Window",
		"label": "Edit Workspaces...",
		"enum": "WINDOW_EDIT_WORKSPACES"
	},
	{
		"id": 4027,
		"menu": "Layer",
		"label": "Freeze On Last Frame",
		"enum": "LAYER_FREEZE_ON_LAST_FRAME"
	},
	{
		"id": 4036,
		"menu": "Layer",
		"label": "Create Keyframes from Data",
		"enum": "LAYER_CREATE_KEYFRAMES_FROM_DATA"
	},
	{
		"id": 4036,
		"menu": "Animation",
		"label": "Create Keyframes from Data",
		"enum": "ANIM_CREATE_KEYFRAMES_FROM_DATA"
	},
	{
		"id": 4041,
		"menu": "Layer",
		"label": "Align Video to Data",
		"enum": "LAYER_ALIGN_VIDEO_TO_DATA"
	},
	{
		"id": 4042,
		"menu": "Animation",
		"label": "Add Property to Essential Graphics",
		"enum": "ANIM_ADD_PROPERTY_TO_ESSENTIAL_GRAPHICS"
	},
	{
		"id": 4043,
		"menu": "Layer",
		"label": "Reveal",
		"enum": "LAYER_REVEAL"
	},
	{
		"id": 4044,
		"menu": "Layer",
		"label": "Create",
		"enum": "LAYER_CREATE"
	},
	{
		"id": 4046,
		"menu": "Preferences",
		"label": "Open",
		"enum": "PREF_OPEN"
	},
	{
		"id": 4049,
		"menu": "Layer",
		"label": "Content-Aware Fill Layer...",
		"enum": "LAYER_CONTENT_AWARE_FILL_LAYER"
	},
	{
		"id": 4150,
		"menu": "Composition",
		"label": "Responsive Design — Time",
		"enum": "COMP_RESPONSIVE_DESIGN_—_TIME"
	},
	{
		"id": 4151,
		"menu": "Composition",
		"label": "Create Intro",
		"enum": "COMP_CREATE_INTRO"
	},
	{
		"id": 4152,
		"menu": "Composition",
		"label": "Create Outro",
		"enum": "COMP_CREATE_OUTRO"
	},
	{
		"id": 4153,
		"menu": "Composition",
		"label": "Create Protected Region from Work Area",
		"enum": "COMP_CREATE_PROTECTED_REGION_FROM_WORK_AREA"
	},
	{
		"id": 4156,
		"menu": "Layer",
		"label": "Markers",
		"enum": "LAYER_MARKERS"
	},
	{
		"id": 4158,
		"menu": "View",
		"label": "Import Guides...",
		"enum": "VIEW_IMPORT_GUIDES"
	},
	{
		"id": 4159,
		"menu": "View",
		"label": "Export Guides...",
		"enum": "VIEW_EXPORT_GUIDES"
	},
	{
		"id": 4162,
		"menu": "Layer",
		"label": "Convert To Bezier Path",
		"enum": "LAYER_CONVERT_TO_BEZIER_PATH"
	},
	{
		"id": 4163,
		"menu": "File",
		"label": "Save a Copy As CC (15.x)...",
		"enum": "FILE_SAVE_A_COPY_AS_CC_15_X"
	},
	{
		"id": 4164,
		"menu": "File",
		"label": "Save a Copy As CC (16.x)...",
		"enum": "FILE_SAVE_A_COPY_AS_CC_16_X"
	},
	{
		"id": 5001,
		"menu": "Window",
		"label": "Progress",
		"enum": "WINDOW_PROGRESS"
	},
	{
		"id": 5002,
		"menu": "Composition",
		"label": "Photoshop Layers...",
		"enum": "COMP_PHOTOSHOP_LAYERS"
	},
	{
		"id": 5003,
		"menu": "Animation",
		"label": "Exponential Scale",
		"enum": "ANIM_EXPONENTIAL_SCALE"
	},
	{
		"id": 5004,
		"menu": "Animation",
		"label": "Sequence Layers...",
		"enum": "ANIM_SEQUENCE_LAYERS"
	},
	{
		"id": 5006,
		"menu": "Window",
		"label": "Tracker",
		"enum": "WINDOW_TRACKER"
	},
	{
		"id": 5007,
		"menu": "Edit",
		"label": "Paste Mocha mask",
		"enum": "EDIT_PASTE_MOCHA_MASK"
	},
	{
		"id": 5008,
		"menu": "Animation",
		"label": "Track in Boris FX Mocha",
		"enum": "ANIM_TRACK_IN_BORIS_FX_MOCHA"
	},
	{
		"id": 5046,
		"menu": "Window",
		"label": "Adobe Color Themes",
		"enum": "WINDOW_ADOBE_COLOR_THEMES"
	},
	{
		"id": 5047,
		"menu": "Window",
		"label": "Automaton",
		"enum": "WINDOW_AUTOMATON"
	},
	{
		"id": 5047,
		"menu": "Window",
		"label": "Automaton",
		"enum": "WINDOW_AUTOMATON"
	},
	{
		"id": 5049,
		"menu": "Window",
		"label": "Automaton Proto",
		"enum": "WINDOW_AUTOMATON_PROTO"
	},
	{
		"id": 5050,
		"menu": "Window",
		"label": "CEP HTML Test Modal Dialog",
		"enum": "WINDOW_CEP_HTML_TEST_MODAL_DIALOG"
	},
	{
		"id": 5051,
		"menu": "Window",
		"label": "CEP HTML Test Modeless Dialog",
		"enum": "WINDOW_CEP_HTML_TEST_MODELESS_DIALOG"
	},
	{
		"id": 5052,
		"menu": "Window",
		"label": "CEP HTML Test Panel 1",
		"enum": "WINDOW_CEP_HTML_TEST_PANEL_1"
	},
	{
		"id": 5053,
		"menu": "Window",
		"label": "CEP HTML Test Panel 2",
		"enum": "WINDOW_CEP_HTML_TEST_PANEL_2"
	},
	{
		"id": 5054,
		"menu": "Window",
		"label": "Expressionist",
		"enum": "WINDOW_EXPRESSIONIST"
	},
	{
		"id": 5055,
		"menu": "Window",
		"label": "Expressionist Prerelease",
		"enum": "WINDOW_EXPRESSIONIST_PRERELEASE"
	},
	{
		"id": 5056,
		"menu": "Window",
		"label": "Frame.io",
		"enum": "WINDOW_FRAME_IO"
	},
	{
		"id": 5057,
		"menu": "Window",
		"label": "KBar",
		"enum": "WINDOW_KBAR"
	},
	{
		"id": 5058,
		"menu": "Window",
		"label": "Learn",
		"enum": "WINDOW_LEARN"
	},
	{
		"id": 5058,
		"menu": "Window",
		"label": "Learn",
		"enum": "WINDOW_LEARN"
	},
	{
		"id": 5059,
		"menu": "Window",
		"label": "Libraries",
		"enum": "WINDOW_LIBRARIES"
	},
	{
		"id": 5059,
		"menu": "Window",
		"label": "Libraries",
		"enum": "WINDOW_LIBRARIES"
	},
	{
		"id": 5060,
		"menu": "Window",
		"label": "Motion Array",
		"enum": "WINDOW_MOTION_ARRAY"
	},
	{
		"id": 5061,
		"menu": "Window",
		"label": "Motion Factory",
		"enum": "WINDOW_MOTION_FACTORY"
	},
	{
		"id": 5062,
		"menu": "Window",
		"label": "My Panel",
		"enum": "WINDOW_MY_PANEL"
	},
	{
		"id": 5063,
		"menu": "Window",
		"label": "SHIFT",
		"enum": "WINDOW_SHIFT"
	},
	{
		"id": 5064,
		"menu": "Window",
		"label": "Selective",
		"enum": "WINDOW_SELECTIVE"
	},
	{
		"id": 5065,
		"menu": "Window",
		"label": "Variety",
		"enum": "WINDOW_VARIETY"
	},
	{
		"id": 5066,
		"menu": "Window",
		"label": "Wipster Review Panel 3.3.0",
		"enum": "WINDOW_WIPSTER_REVIEW_PANEL_3_3_0"
	},
	{
		"id": 5067,
		"menu": "Window",
		"label": "aescripts + aeplugins Sample App",
		"enum": "WINDOW_AESCRIPTS_AEPLUGINS_SAMPLE_APP"
	},
	{
		"id": 5068,
		"menu": "Window",
		"label": "component-tester",
		"enum": "WINDOW_COMPONENT_TESTER"
	},
	{
		"id": 5069,
		"menu": "Window",
		"label": "undefined",
		"enum": "WINDOW_UNDEFINED"
	},
	{
		"id": 5071,
		"menu": "Composition",
		"label": "ProEXR...",
		"enum": "COMP_PROEXR"
	},
	{
		"id": 5072,
		"menu": "File",
		"label": "Export Adobe Premiere Pro Project...",
		"enum": "FILE_EXPORT_ADOBE_PREMIERE_PRO_PROJECT"
	},
	{
		"id": 5073,
		"menu": "File",
		"label": "Import Adobe Premiere Pro Project...",
		"enum": "FILE_IMPORT_ADOBE_PREMIERE_PRO_PROJECT"
	},
	{
		"id": 5074,
		"menu": "Window",
		"label": "Align",
		"enum": "WINDOW_ALIGN"
	},
	{
		"id": 5075,
		"menu": "Animation",
		"label": "Convert Audio to Keyframes",
		"enum": "ANIM_CONVERT_AUDIO_TO_KEYFRAMES"
	},
	{
		"id": 5076,
		"menu": "Window",
		"label": "Essential Graphics",
		"enum": "WINDOW_ESSENTIAL_GRAPHICS"
	},
	{
		"id": 5076,
		"menu": "Window",
		"label": "Essential Graphics",
		"enum": "WINDOW_ESSENTIAL_GRAPHICS"
	},
	{
		"id": 5077,
		"menu": "Window",
		"label": "Content-Aware Fill",
		"enum": "WINDOW_CONTENT_AWARE_FILL"
	},
	{
		"id": 5079,
		"menu": "Window",
		"label": "Motion Sketch",
		"enum": "WINDOW_MOTION_SKETCH"
	},
	{
		"id": 5080,
		"menu": "Animation",
		"label": "RPF Camera Import",
		"enum": "ANIM_RPF_CAMERA_IMPORT"
	},
	{
		"id": 5081,
		"menu": "File",
		"label": "Vanishing Point (.vpe)...",
		"enum": "FILE_VANISHING_POINT_VPE"
	},
	{
		"id": 5082,
		"menu": "Composition",
		"label": "VR",
		"enum": "COMP_VR"
	},
	{
		"id": 5083,
		"menu": "Composition",
		"label": "Create VR Environment...",
		"enum": "COMP_CREATE_VR_ENVIRONMENT"
	},
	{
		"id": 5084,
		"menu": "Composition",
		"label": "Extract Cubemap...",
		"enum": "COMP_EXTRACT_CUBEMAP"
	},
	{
		"id": 5085,
		"menu": "Window",
		"label": "Mask Interpolation",
		"enum": "WINDOW_MASK_INTERPOLATION"
	},
	{
		"id": 5086,
		"menu": "Window",
		"label": "Smoother",
		"enum": "WINDOW_SMOOTHER"
	},
	{
		"id": 5088,
		"menu": "Window",
		"label": "Wiggler",
		"enum": "WINDOW_WIGGLER"
	},
	{
		"id": 5089,
		"menu": "File",
		"label": "Maxon Cinema 4D Exporter...",
		"enum": "FILE_MAXON_CINEMA_4D_EXPORTER"
	},
	{
		"id": 5090,
		"menu": "Window",
		"label": "MFColorPicker",
		"enum": "WINDOW_MFCOLORPICKER"
	},
	{
		"id": 5091,
		"menu": "Edit",
		"label": "Team Project",
		"enum": "EDIT_TEAM_PROJECT"
	},
	{
		"id": 7000,
		"menu": "Effect",
		"label": "3D Channel",
		"enum": "EFFECT_3D_CHANNEL"
	},
	{
		"id": 7001,
		"menu": "Composition",
		"label": "Audio",
		"enum": "COMP_AUDIO"
	},
	{
		"id": 7001,
		"menu": "Layer",
		"label": "Audio",
		"enum": "LAYER_AUDIO"
	},
	{
		"id": 7001,
		"menu": "Effect",
		"label": "Audio",
		"enum": "EFFECT_AUDIO"
	},
	{
		"id": 7001,
		"menu": "Window",
		"label": "Audio",
		"enum": "WINDOW_AUDIO"
	},
	{
		"id": 7003,
		"menu": "Effect",
		"label": "Boris FX Mocha",
		"enum": "EFFECT_BORIS_FX_MOCHA"
	},
	{
		"id": 7004,
		"menu": "Effect",
		"label": "Braindot Design",
		"enum": "EFFECT_BRAINDOT_DESIGN"
	},
	{
		"id": 7005,
		"menu": "Effect",
		"label": "CINEMA 4D",
		"enum": "EFFECT_CINEMA_4D"
	},
	{
		"id": 7006,
		"menu": "Effect",
		"label": "Channel",
		"enum": "EFFECT_CHANNEL"
	},
	{
		"id": 7007,
		"menu": "Effect",
		"label": "Color Correction",
		"enum": "EFFECT_COLOR_CORRECTION"
	},
	{
		"id": 7008,
		"menu": "Effect",
		"label": "Distort",
		"enum": "EFFECT_DISTORT"
	},
	{
		"id": 7009,
		"menu": "Effect",
		"label": "Expression Controls",
		"enum": "EFFECT_EXPRESSION_CONTROLS"
	},
	{
		"id": 7010,
		"menu": "Effect",
		"label": "Generate",
		"enum": "EFFECT_GENERATE"
	},
	{
		"id": 7011,
		"menu": "Effect",
		"label": "Immersive Video",
		"enum": "EFFECT_IMMERSIVE_VIDEO"
	},
	{
		"id": 7012,
		"menu": "Effect",
		"label": "Keying",
		"enum": "EFFECT_KEYING"
	},
	{
		"id": 7013,
		"menu": "Effect",
		"label": "Matte",
		"enum": "EFFECT_MATTE"
	},
	{
		"id": 7015,
		"menu": "Effect",
		"label": "Obsolete",
		"enum": "EFFECT_OBSOLETE"
	},
	{
		"id": 7016,
		"menu": "Effect",
		"label": "Perspective",
		"enum": "EFFECT_PERSPECTIVE"
	},
	{
		"id": 7017,
		"menu": "Effect",
		"label": "Plugin Everything",
		"enum": "EFFECT_PLUGIN_EVERYTHING"
	},
	{
		"id": 7018,
		"menu": "Effect",
		"label": "Simulation",
		"enum": "EFFECT_SIMULATION"
	},
	{
		"id": 7019,
		"menu": "Effect",
		"label": "Stylize",
		"enum": "EFFECT_STYLIZE"
	},
	{
		"id": 7020,
		"menu": "Layer",
		"label": "Text",
		"enum": "LAYER_TEXT"
	},
	{
		"id": 7020,
		"menu": "Effect",
		"label": "Text",
		"enum": "EFFECT_TEXT"
	},
	{
		"id": 7020,
		"menu": "Window",
		"label": "Text",
		"enum": "WINDOW_TEXT"
	},
	{
		"id": 7022,
		"menu": "Effect",
		"label": "Transition",
		"enum": "EFFECT_TRANSITION"
	},
	{
		"id": 7023,
		"menu": "Effect",
		"label": "Utility",
		"enum": "EFFECT_UTILITY"
	},
	{
		"id": 7024,
		"menu": "Effect",
		"label": "tl",
		"enum": "EFFECT_TL"
	},
	{
		"id": 8000,
		"menu": "File",
		"label": "Run Script File...",
		"enum": "FILE_RUN_SCRIPT_FILE"
	},
	{
		"id": 8001,
		"menu": "File",
		"label": "Open Script Editor",
		"enum": "FILE_OPEN_SCRIPT_EDITOR"
	},
	{
		"id": 8100,
		"menu": "File",
		"label": "Scripts",
		"enum": "FILE_SCRIPTS"
	},
	{
		"id": 8101,
		"menu": "File",
		"label": "Change Render Locations.jsx",
		"enum": "FILE_CHANGE_RENDER_LOCATIONS_JSX"
	},
	{
		"id": 8102,
		"menu": "File",
		"label": "Convert Selected Properties to Markers.jsx",
		"enum": "FILE_CONVERT_SELECTED_PROPERTIES_TO_MARKERS_JSX"
	},
	{
		"id": 8103,
		"menu": "File",
		"label": "Demo Palette.jsx",
		"enum": "FILE_DEMO_PALETTE_JSX"
	},
	{
		"id": 8104,
		"menu": "File",
		"label": "Double-Up.jsx",
		"enum": "FILE_DOUBLE_UP_JSX"
	},
	{
		"id": 8105,
		"menu": "File",
		"label": "Find and Replace Text.jsx",
		"enum": "FILE_FIND_AND_REPLACE_TEXT_JSX"
	},
	{
		"id": 8106,
		"menu": "File",
		"label": "Render and Email.jsx",
		"enum": "FILE_RENDER_AND_EMAIL_JSX"
	},
	{
		"id": 8107,
		"menu": "File",
		"label": "Scale Composition.jsx",
		"enum": "FILE_SCALE_COMPOSITION_JSX"
	},
	{
		"id": 8108,
		"menu": "File",
		"label": "Scale Selected Layers.jsx",
		"enum": "FILE_SCALE_SELECTED_LAYERS_JSX"
	},
	{
		"id": 8109,
		"menu": "File",
		"label": "Smart Import.jsx",
		"enum": "FILE_SMART_IMPORT_JSX"
	},
	{
		"id": 8110,
		"menu": "File",
		"label": "Sort Layers by In Point.jsx",
		"enum": "FILE_SORT_LAYERS_BY_IN_POINT_JSX"
	},
	{
		"id": 8111,
		"menu": "File",
		"label": "Update Legacy Expressions.jsx",
		"enum": "FILE_UPDATE_LEGACY_EXPRESSIONS_JSX"
	},
	{
		"id": 8112,
		"menu": "File",
		"label": "UpgradeLegacyBlurs.jsx",
		"enum": "FILE_UPGRADELEGACYBLURS_JSX"
	},
	{
		"id": 8988,
		"menu": "File",
		"label": "Recent Script Files",
		"enum": "FILE_RECENT_SCRIPT_FILES"
	},
	{
		"id": 8989,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 8990,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 8991,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 8992,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 8993,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 8994,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 8995,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 8996,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 8997,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 8998,
		"menu": "File",
		"label": "None",
		"enum": "FILE_NONE"
	},
	{
		"id": 10207,
		"menu": "Layer",
		"label": "Bilinear",
		"enum": "LAYER_BILINEAR"
	},
	{
		"id": 10208,
		"menu": "Layer",
		"label": "Bicubic",
		"enum": "LAYER_BICUBIC"
	},
	{
		"id": 10212,
		"menu": "Help",
		"label": "Enable Logging",
		"enum": "HELP_ENABLE_LOGGING"
	},
	{
		"id": 10213,
		"menu": "Help",
		"label": "Reveal Logging File",
		"enum": "HELP_REVEAL_LOGGING_FILE"
	},
	{
		"id": 10214,
		"menu": "Help",
		"label": "After Effects In-App Tutorials...",
		"enum": "HELP_AFTER_EFFECTS_IN_APP_TUTORIALS"
	},
	{
		"id": 10300,
		"menu": "Preferences",
		"label": "Sync Settings Now...",
		"enum": "PREF_SYNC_SETTINGS_NOW"
	},
	{
		"id": 10302,
		"menu": "Preferences",
		"label": "Last Update: ",
		"enum": "PREF_LAST_UPDATE"
	},
	{
		"id": 10303,
		"menu": "Preferences",
		"label": "Clear Settings...",
		"enum": "PREF_CLEAR_SETTINGS"
	},
	{
		"id": 10306,
		"menu": "Preferences",
		"label": "Manage Sync Settings...",
		"enum": "PREF_MANAGE_SYNC_SETTINGS"
	},
	{
		"id": 10307,
		"menu": "Preferences",
		"label": "Sync Settings...",
		"enum": "PREF_SYNC_SETTINGS"
	},
	{
		"id": 10310,
		"menu": "Edit",
		"label": "Copy with Property Links",
		"enum": "EDIT_COPY_WITH_PROPERTY_LINKS"
	},
	{
		"id": 10311,
		"menu": "Animation",
		"label": "Track Mask",
		"enum": "ANIM_TRACK_MASK"
	},
	{
		"id": 10312,
		"menu": "Layer",
		"label": "Center Anchor Point in Layer Content",
		"enum": "LAYER_CENTER_ANCHOR_POINT_IN_LAYER_CONTENT"
	},
	{
		"id": 10313,
		"menu": "Edit",
		"label": "Copy with Relative Property Links",
		"enum": "EDIT_COPY_WITH_RELATIVE_PROPERTY_LINKS"
	},
	{
		"id": 10314,
		"menu": "Composition",
		"label": "Play Current Preview",
		"enum": "COMP_PLAY_CURRENT_PREVIEW"
	},
	{
		"id": 10420,
		"menu": "File",
		"label": "License...",
		"enum": "FILE_LICENSE"
	},
	{
		"id": 10424,
		"menu": "Window",
		"label": "Lumetri Scopes",
		"enum": "WINDOW_LUMETRI_SCOPES"
	},
	{
		"id": 10425,
		"menu": "Composition",
		"label": "Open in Essential Graphics",
		"enum": "COMP_OPEN_IN_ESSENTIAL_GRAPHICS"
	},
	{
		"id": 10426,
		"menu": "Edit",
		"label": "Keyboard Shortcuts",
		"enum": "EDIT_KEYBOARD_SHORTCUTS"
	},
	{
		"id": 10428,
		"menu": "File",
		"label": "New Team Project...",
		"enum": "FILE_NEW_TEAM_PROJECT"
	},
	{
		"id": 10429,
		"menu": "File",
		"label": "Open Team Project...",
		"enum": "FILE_OPEN_TEAM_PROJECT"
	},
	{
		"id": 10430,
		"menu": "Edit",
		"label": "Get Latest Changes",
		"enum": "EDIT_GET_LATEST_CHANGES"
	},
	{
		"id": 10431,
		"menu": "Edit",
		"label": "Share My Changes...",
		"enum": "EDIT_SHARE_MY_CHANGES"
	},
	{
		"id": 10432,
		"menu": "Edit",
		"label": "Resolve Conflicts...",
		"enum": "EDIT_RESOLVE_CONFLICTS"
	},
	{
		"id": 10433,
		"menu": "Edit",
		"label": "Media Management...",
		"enum": "EDIT_MEDIA_MANAGEMENT"
	},
	{
		"id": 10436,
		"menu": "Edit",
		"label": "Convert Team Project to Project...",
		"enum": "EDIT_CONVERT_TEAM_PROJECT_TO_PROJECT"
	},
	{
		"id": 10450,
		"menu": "Layer",
		"label": "Enable Expressions",
		"enum": "LAYER_ENABLE_EXPRESSIONS"
	},
	{
		"id": 10451,
		"menu": "Layer",
		"label": "Disable Expressions",
		"enum": "LAYER_DISABLE_EXPRESSIONS"
	},
	{
		"id": 10500,
		"menu": "File",
		"label": "Install Script File...",
		"enum": "FILE_INSTALL_SCRIPT_FILE"
	},
	{
		"id": 10501,
		"menu": "File",
		"label": "Install ScriptUI Panel...",
		"enum": "FILE_INSTALL_SCRIPTUI_PANEL"
	}
]
