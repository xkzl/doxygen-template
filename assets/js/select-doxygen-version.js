/**

MIT License

Copyright (c) 2023 Marco Meyer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

class SelectDoxygenVersion {

    static init(metadata) {
        window.addEventListener("DOMContentLoaded", () => {
            fetch(metadata)
            .then(response => response.text())
            .then((data) => {

                // Extract list of versions
                var versions = data.trim().split("\n");
                    versions.sort();

                // Retrieve current version
                const path = new URL(window.location.href).pathname;
                const pathParts = path.split('/');
                const selectedVersion = pathParts[pathParts.length - 2];

                // Initialize select field
                const selectEl = document.getElementById("MSearchVersionSelect");
                if (selectEl !== undefined) {

                    selectEl.onchange = function(){
                        var goto = this.value;
                        window.location = window.location.href + "/../../"+goto+"/index.html";
                    };
            
                    versions.reverse().forEach(function(version, i) {

                        var option = new Option(i < 1 ? version + " (latest)" : version, version);
                        if(version == selectedVersion) option.setAttribute('selected', true);
                        
                        selectEl.add(option, undefined);
                    });
                }                
            })
        })
    }
}
