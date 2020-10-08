# Migration `20200828040420-init`

This migration has been generated by salva-olacua\n\n\n at 8/28/2020, 1:04:20 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200828040420-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+// Datasource
+datasource db {
+    provider = "sqlite"
+    url = "***"
+}
+
+// Generator
+generator client {
+    provider = "prisma-client-js"
+}
+
+// Data Models
+model Link {
+    id          Int @id @default(autoincrement())
+    created     DateTime @default(now())
+    description String
+    url         String
+}
```

