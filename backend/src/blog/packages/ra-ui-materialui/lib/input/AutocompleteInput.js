"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var downshift_1 = __importDefault(require("downshift"));
var get_1 = __importDefault(require("lodash/get"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var ra_core_1 = require("ra-core");
var InputHelperText_1 = __importDefault(require("./InputHelperText"));
var AutocompleteSuggestionList_1 = __importDefault(require("./AutocompleteSuggestionList"));
var AutocompleteSuggestionItem_1 = __importDefault(require("./AutocompleteSuggestionItem"));
/**
 * An Input component for an autocomplete field, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property an the option text
 * @example
 * const choices = [
 *    { id: 'M', name: 'Male' },
 *    { id: 'F', name: 'Female' },
 * ];
 * <AutocompleteInput source="gender" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <AutocompleteInput source="author_id" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <AutocompleteInput source="author_id" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that will be cloned and receive
 * the related choice as the `record` prop. You can use Field components there.
 * Note that you must also specify the `matchSuggestion` prop
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const matchSuggestion = (filterValue, choice) => choice.first_name.match(filterValue) || choice.last_name.match(filterValue);
 * const FullNameField = ({ record }) => <span>{record.first_name} {record.last_name}</span>;
 * <SelectInput source="gender" choices={choices} optionText={<FullNameField />} matchSuggestion={matchSuggestion} />
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'M', name: 'myroot.gender.male' },
 *    { id: 'F', name: 'myroot.gender.female' },
 * ];
 *
 * However, in some cases (e.g. inside a `<ReferenceInput>`), you may not want
 * the choice to be translated. In that case, set the `translateChoice` prop to false.
 * @example
 * <AutocompleteInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the material-ui <TextField> component
 *
 * @example
 * <AutocompleteInput source="author_id" options={{ color: 'secondary', InputLabelProps: { shrink: true } }} />
 */
var AutocompleteInput = function (props) {
    var allowEmpty = props.allowEmpty, className = props.className, classesOverride = props.classes, _a = props.choices, choices = _a === void 0 ? [] : _a, disabled = props.disabled, emptyText = props.emptyText, emptyValue = props.emptyValue, format = props.format, fullWidth = props.fullWidth, helperText = props.helperText, idOverride = props.id, inputOverride = props.input, isRequiredOverride = props.isRequired, label = props.label, limitChoicesToValue = props.limitChoicesToValue, _b = props.margin, margin = _b === void 0 ? 'dense' : _b, matchSuggestion = props.matchSuggestion, metaOverride = props.meta, onBlur = props.onBlur, onChange = props.onChange, onFocus = props.onFocus, _c = props.options, _d = _c === void 0 ? {
        suggestionsContainerProps: undefined,
        labelProps: undefined,
        InputProps: undefined,
    } : _c, suggestionsContainerProps = _d.suggestionsContainerProps, labelProps = _d.labelProps, InputProps = _d.InputProps, options = __rest(_d, ["suggestionsContainerProps", "labelProps", "InputProps"]), _e = props.optionText, optionText = _e === void 0 ? 'name' : _e, inputText = props.inputText, _f = props.optionValue, optionValue = _f === void 0 ? 'id' : _f, parse = props.parse, resource = props.resource, setFilter = props.setFilter, shouldRenderSuggestionsOverride = props.shouldRenderSuggestions, source = props.source, suggestionLimit = props.suggestionLimit, _g = props.translateChoice, translateChoice = _g === void 0 ? true : _g, validate = props.validate, _h = props.variant, variant = _h === void 0 ? 'filled' : _h, rest = __rest(props, ["allowEmpty", "className", "classes", "choices", "disabled", "emptyText", "emptyValue", "format", "fullWidth", "helperText", "id", "input", "isRequired", "label", "limitChoicesToValue", "margin", "matchSuggestion", "meta", "onBlur", "onChange", "onFocus", "options", "optionText", "inputText", "optionValue", "parse", "resource", "setFilter", "shouldRenderSuggestions", "source", "suggestionLimit", "translateChoice", "validate", "variant"]);
    if (react_1.isValidElement(optionText) && !inputText) {
        throw new Error("If the optionText prop is a React element, you must also specify the inputText prop:\n        <AutocompleteInput\n            inputText={(record) => record.title}\n        />");
    }
    ra_core_1.warning(react_1.isValidElement(optionText) && !matchSuggestion, "If the optionText prop is a React element, you must also specify the matchSuggestion prop:\n<AutocompleteInput\n    matchSuggestion={(filterValue, suggestion) => true}\n/>\n        ");
    ra_core_1.warning(source === undefined, "If you're not wrapping the AutocompleteInput inside a ReferenceInput, you must provide the source prop");
    ra_core_1.warning(choices === undefined, "If you're not wrapping the AutocompleteInput inside a ReferenceInput, you must provide the choices prop");
    var classes = useStyles(props);
    var inputEl = react_1.useRef();
    var anchorEl = react_1.useRef();
    var _j = ra_core_1.useInput(__assign({ format: format, id: idOverride, input: inputOverride, meta: metaOverride, onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        parse: parse,
        resource: resource,
        source: source,
        validate: validate }, rest)), id = _j.id, input = _j.input, isRequired = _j.isRequired, _k = _j.meta, touched = _k.touched, error = _k.error;
    var _l = react_1.useState(''), filterValue = _l[0], setFilterValue = _l[1];
    var getSuggestionFromValue = react_1.useCallback(function (value) { return choices.find(function (choice) { return get_1.default(choice, optionValue) === value; }); }, [choices, optionValue]);
    var selectedItem = react_1.useMemo(function () { return getSuggestionFromValue(input.value) || null; }, [input.value, getSuggestionFromValue]);
    var _m = ra_core_1.useSuggestions({
        allowEmpty: allowEmpty,
        choices: choices,
        emptyText: emptyText,
        emptyValue: emptyValue,
        limitChoicesToValue: limitChoicesToValue,
        matchSuggestion: matchSuggestion,
        optionText: optionText,
        optionValue: optionValue,
        selectedItem: selectedItem,
        suggestionLimit: suggestionLimit,
        translateChoice: translateChoice,
    }), getChoiceText = _m.getChoiceText, getChoiceValue = _m.getChoiceValue, getSuggestions = _m.getSuggestions;
    var handleFilterChange = react_1.useCallback(function (eventOrValue) {
        var event = eventOrValue;
        var value = event.target
            ? event.target.value
            : eventOrValue;
        if (setFilter) {
            setFilter(value);
        }
    }, [setFilter]);
    // We must reset the filter every time the value changes to ensure we
    // display at least some choices even if the input has a value.
    // Otherwise, it would only display the currently selected one and the user
    // would have to first clear the input before seeing any other choices
    react_1.useEffect(function () {
        handleFilterChange('');
        // If we have a value, set the filter to its text so that
        // Downshift displays it correctly
        setFilterValue(typeof input.value === 'undefined' ||
            input.value === null ||
            selectedItem === null
            ? ''
            : inputText
                ? inputText(getChoiceText(selectedItem).props.record)
                : getChoiceText(selectedItem));
    }, [
        input.value,
        handleFilterChange,
        selectedItem,
        getChoiceText,
        inputText,
    ]);
    var handleChange = react_1.useCallback(function (item) {
        input.onChange(getChoiceValue(item));
    }, [getChoiceValue, input]);
    // This function ensures that the suggestion list stay aligned to the
    // input element even if it moves (because user scrolled for example)
    var updateAnchorEl = function () {
        if (!inputEl.current) {
            return;
        }
        var inputPosition = inputEl.current.getBoundingClientRect();
        // It works by implementing a mock element providing the only method used
        // by the PopOver component, getBoundingClientRect, which will return a
        // position based on the input position
        if (!anchorEl.current) {
            anchorEl.current = { getBoundingClientRect: function () { return inputPosition; } };
        }
        else {
            var anchorPosition = anchorEl.current.getBoundingClientRect();
            if (anchorPosition.x !== inputPosition.x ||
                anchorPosition.y !== inputPosition.y) {
                anchorEl.current = {
                    getBoundingClientRect: function () { return inputPosition; },
                };
            }
        }
    };
    var storeInputRef = function (input) {
        inputEl.current = input;
        updateAnchorEl();
    };
    var handleBlur = react_1.useCallback(function (event) {
        handleFilterChange('');
        // If we had a value before, set the filter back to its text so that
        // Downshift displays it correctly
        setFilterValue(input.value
            ? inputText
                ? inputText(getChoiceText(selectedItem).props.record)
                : getChoiceText(selectedItem)
            : '');
        input.onBlur(event);
    }, [getChoiceText, handleFilterChange, input, inputText, selectedItem]);
    var handleFocus = react_1.useCallback(function (openMenu) { return function (event) {
        openMenu(event);
        input.onFocus(event);
    }; }, [input]);
    var shouldRenderSuggestions = function (val) {
        if (shouldRenderSuggestionsOverride !== undefined &&
            typeof shouldRenderSuggestionsOverride === 'function') {
            return shouldRenderSuggestionsOverride(val);
        }
        return true;
    };
    return (react_1.default.createElement(downshift_1.default, __assign({ inputValue: filterValue, onChange: handleChange, selectedItem: selectedItem, itemToString: function (item) { return getChoiceValue(item); } }, rest), function (_a) {
        var getInputProps = _a.getInputProps, getItemProps = _a.getItemProps, getLabelProps = _a.getLabelProps, getMenuProps = _a.getMenuProps, isOpen = _a.isOpen, highlightedIndex = _a.highlightedIndex, openMenu = _a.openMenu;
        var isMenuOpen = isOpen && shouldRenderSuggestions(filterValue);
        var _b = getInputProps(__assign({ onBlur: handleBlur, onFocus: handleFocus(openMenu) }, InputProps)), downshiftId = _b.id, // We want to ignore this to correctly link our label and the input
        value = _b.value, onBlur = _b.onBlur, onChange = _b.onChange, onFocus = _b.onFocus, ref = _b.ref, size = _b.size, color = _b.color, inputProps = __rest(_b, ["id", "value", "onBlur", "onChange", "onFocus", "ref", "size", "color"]);
        var suggestions = getSuggestions(filterValue);
        return (react_1.default.createElement("div", { className: classes.container },
            react_1.default.createElement(core_1.TextField, __assign({ id: id, name: input.name, InputProps: {
                    inputRef: storeInputRef,
                    onBlur: onBlur,
                    onChange: function (event) {
                        handleFilterChange(event);
                        setFilterValue(event.target.value);
                        onChange(event);
                    },
                    onFocus: onFocus,
                }, error: !!(touched && error), label: react_1.default.createElement(ra_core_1.FieldTitle, __assign({ label: label }, labelProps, { source: source, resource: resource, isRequired: typeof isRequiredOverride !==
                        'undefined'
                        ? isRequiredOverride
                        : isRequired })), InputLabelProps: getLabelProps({
                    htmlFor: id,
                }), helperText: react_1.default.createElement(InputHelperText_1.default, { touched: touched, error: error, helperText: helperText }), disabled: disabled, variant: variant, margin: margin, fullWidth: fullWidth, value: filterValue, className: className, size: size, color: color }, inputProps, options)),
            react_1.default.createElement(AutocompleteSuggestionList_1.default, { isOpen: isMenuOpen, menuProps: getMenuProps({}, 
                // https://github.com/downshift-js/downshift/issues/235
                { suppressRefError: true }), inputEl: inputEl.current, suggestionsContainerProps: suggestionsContainerProps, className: classes.suggestionsContainer }, suggestions.map(function (suggestion, index) { return (react_1.default.createElement(AutocompleteSuggestionItem_1.default, __assign({ key: getChoiceValue(suggestion), suggestion: suggestion, index: index, highlightedIndex: highlightedIndex, isSelected: input.value ===
                    getChoiceValue(suggestion), filterValue: filterValue, getSuggestionText: getChoiceText }, getItemProps({
                item: suggestion,
            })))); }))));
    }));
};
var useStyles = styles_1.makeStyles({
    container: {
        flexGrow: 1,
        position: 'relative',
    },
    suggestionsContainer: {},
}, { name: 'RaAutocompleteInput' });
exports.default = AutocompleteInput;
