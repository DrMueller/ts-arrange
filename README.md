# TS-Arrange
Simple reordering of TypeScript File-Elements like Properties, Fields, Functions etc.

## Installation
In the command palette (cmd-shift-p) select Install Extension and search for  __ts-arrange__.

## Usage
### Arrange File
1. Make sure the arrangement is configured
2. Navigate to the desired TypeScript Class
3. On the command palette (cmd-shift-p), select _Arrange File_
4. Profit

## Configuration
### Definition
1. Navigate to your Workspace Config (File -> Preferences -> Settings)
2. Add blocks to the top-element with the following attributes:   
     * Element-name: Internal Identifier of the Element-Block
     * Sequence: Sorting-Order of the Element
     * Empty-Line-Between: Defines, if a Line should be added for each Element within the same group

**NOTE**: Do always set all Element-Blocks, otherwise the not found Types will get deleted!

### Example
```javascript
 "tsarrange": {
    "file-sorting": [
      {
        "element-name": "Private Readonly Field",
        "sequence": 1,
        "empty-line-between": false
      },
      {
        "element-name": "Protected Readonly Field",
        "sequence": 2,
        "empty-line-between": false
      },
      {
        "element-name": "Internal Readonly Field",
        "sequence": 3,
        "empty-line-between": false
      },
      {
        "element-name": "Public Readonly Field",
        "sequence": 4,
        "empty-line-between": false
      },
      {
        "element-name": "Private Field",
        "sequence": 5,
        "empty-line-between": false
      },
      {
        "element-name": "Protected Field",
        "sequence": 6,
        "empty-line-between": false
      },
      {
        "element-name": "Internal Field",
        "sequence": 7,
        "empty-line-between": false
      },
      {
        "element-name": "Public Field",
        "sequence": 8,
        "empty-line-between": false
      },
      {
        "element-name": "Public Property",
        "sequence": 9,
        "empty-line-between": true
      },
      {
        "element-name": "Internal Property",
        "sequence": 10,
        "empty-line-between": true
      },
      {
        "element-name": "Protected Property",
        "sequence": 11,
        "empty-line-between": true
      },
      {
        "element-name": "Private Property",
        "sequence": 12,
        "empty-line-between": true
      },
      {
        "element-name": "Constructor",
        "sequence": 13,
        "empty-line-between": true
      },
      {
        "element-name": "Public Function",
        "sequence": 14,
        "empty-line-between": true
      },
      {
        "element-name": "Internal Function",
        "sequence": 15,
        "empty-line-between": true
      },
      {
        "element-name": "Protected Function",
        "sequence": 16,
        "empty-line-between": true
      },
      {
        "element-name": "Private Function",
        "sequence": 17,
        "empty-line-between": true
      }
    ]
  }
  ```

## Change-Log
###  0.13.0
- Very initial

## License
This software is released under [MIT License](http://www.opensource.org/licenses/mit-license.php)
