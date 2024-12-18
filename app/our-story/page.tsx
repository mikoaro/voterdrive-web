import Link from "next/link";

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-medium">
                <Link href="/">VoterDrive</Link>
              </h1>
              <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                BETA
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="border-b-2 border-green-500">
                <span className="text-gray-900">Our Story</span>
              </div>
              <span className="text-gray-600 hover:text-gray-900">
                <Link href="/vote-member/history">Your History</Link>
              </span>
              <div className="h-8 w-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
                MI
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">Our Story</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1+1 weeks ago,</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                a Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
              </p>
              <p className="text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-gray-700">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Fermentum lorem ornare ac faucibus suscipit dignissim. Tristique facilisis lacus ante cubilia, consectetur mollis ornare.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              Fast forward to today,
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                We find ourselves in a new era. We've{" "}
                <span className="font-medium">
                  harnessed the power of Artificial Intelligence to forge a
                  bridge to a different tomorrow, a tomorrow
                </span>{" "}
                where solutions are not just answers but pieces of a complex
                puzzle.
              </p>
              <p className="text-gray-700">
                The view that changes us is a collection of everything we know
                about the transformation ahead: a{" "}
                <span className="font-medium">
                  vast consequat litora augue faucibus nunc suscipit tellus mus. Lectus class consectetur faucibus tellus semper nunc sapien.
                </span>
              </p>
              <p className="text-gray-700">
                Our mission isn't just to present a singular solution but to
                embrace the journey of small victories and, yes, some failures
                too. We're not just in search of answers; we're{" "}
                <span className="font-medium">uncovering connections</span>. Our
                curated knowledge isn't a static picture; it's a dynamic
                representation of the intricate dance between success and
                setback.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Future</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                The information we've gathered isn't just data; it's a lens
                through which we navigate the challenges of our interconnected
                world. VoterDrive VoteGPT aims to be more than a platform; it's social
                intelligence interwoven into our technology, an endeavor to
                decode the complexities of our time.
              </p>
              <p className="text-gray-700">
                As we venture into this new age, our aim is clear: to provide
                you with a different perspective, to show you not only the
                solutions but the very{" "}
                <span className="font-medium">process of discovery</span>.
                Because in the grand tapestry of knowledge, every thread counts.
                We're building a bridge to tomorrow, not just for us but for the
                generations yet to come.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <span className="hover:underline cursor-pointer">
                Privacy policy
              </span>
              <span className="hover:underline cursor-pointer">Disclaimer</span>
              <span className="hover:underline cursor-pointer">
                Terms of use
              </span>
            </div>
            <div>© VoterDrive.AI 2024</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
