//
// JCOrphanedPages
// VoodooPad Script
//
// Created by Rafael Bugajewski on 02/08/12.
// Copyright (c) 2012, Juicy Cocktail
// All rights reserved.
// 
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following
// conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in
//       the documentation and/or other materials provided with the 
//       distribution.
//     * Neither the name of Juicy Cocktail nor the names of its
//       contributors may be used to endorse or promote products
//       derived from this software without specific prior written 
//       permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL  
// BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
// THE POSSIBILITY OF SUCH DAMAGE.

document = windowController.document()
var keys = document.keys();
var linkedPages = [];
var orphanedPages = [];
var summaryPageName = "Orphaned Pages";

/* Collect all linked pages. */
for (i = 0; i < keys.length(); i++)
{
    var page = document.pageForKey(keys[i]);
    var pageContent = page.dataAsAttributedString();
    var linkedPageNames = document.linkedPageNamesInAttributedString(pageContent);
    
    for (j = 0; j < linkedPageNames.length(); j++)
    {
        linkedPages.push(linkedPageNames[j]);
    }
}

/* Now compare the linked pages with all pages to find the orphaned ones. */
for (i = 0; i < keys.length(); i++)
{
    var page = document.pageForKey(keys[i]);
    /* indexOf() doesn’t work on the array. This can have side effects. */
    if (linkedPages.toString().indexOf(page.title()) == -1)
    {
        orphanedPages.push(page.title());
    }
}

/* Create a summary page and open it. */
var summaryPage = document.createNewPageWithName(summaryPageName);
summaryPage.setDataAsString(summaryPageName + "\n\n" + orphanedPages.join("\n"));
document.openPageWithTitle(summaryPageName);
