import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const UserProfile = () => {
  return (
    <main className="flex min-h-screen items-center justify-center flex-1 flex-col">
      <Tabs defaultValue="profile" className="w-[385px]">
        <TabsList>
          <TabsTrigger value="profile">Update Profile</TabsTrigger>
          <TabsTrigger value="password">Update Password</TabsTrigger>
          <TabsTrigger value="avatar">Upload Avatar</TabsTrigger>
        </TabsList>
        <TabsContent value="profile"></TabsContent>
        <TabsContent value="password"></TabsContent>
        <TabsContent value="avatar"></TabsContent>
      </Tabs>
    </main>
  );
};

export default UserProfile;
