# List all orphaned pages in a VoodooPad document

This simple scripts searches for all pages in the currently open
document and creates a new page with a list of pages that don’t have
any backlinks.

To install this script, create a new VoodooPad page with the
*JavaScript / JSTalk* type and paste the contents of
*JCOrphanedPages.js* into the new page. ⌃⌘; will execute the script
and open a page named *Orphaned Pages* in the current document. If you
already had a page with the same name, it’ll be overwritten without a
warning. You can configure the name of the page by editing the
*summaryPageName* variable in line 39.
